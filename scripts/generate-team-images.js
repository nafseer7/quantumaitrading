const fs = require('fs');
const path = require('path');
const https = require('https');

// Team members data
const teamMembers = [
  // Leadership
  { name: 'Alexander Chen', gender: 'male', age: '40-45', ethnicity: 'asian', style: 'business' },
  { name: 'Sofia Rodriguez', gender: 'female', age: '35-40', ethnicity: 'hispanic', style: 'business' },
  { name: 'Marcus Thompson', gender: 'male', age: '40-45', ethnicity: 'caucasian', style: 'business' },
  
  // Engineering
  { name: 'Yuki Tanaka', gender: 'male', age: '30-35', ethnicity: 'asian', style: 'casual' },
  { name: 'Elena Popov', gender: 'female', age: '30-35', ethnicity: 'caucasian', style: 'casual' },
  { name: 'Raj Patel', gender: 'male', age: '35-40', ethnicity: 'indian', style: 'smart-casual' },
  
  // Product
  { name: 'Isabella Costa', gender: 'female', age: '30-35', ethnicity: 'hispanic', style: 'creative' },
  { name: 'Lucas Weber', gender: 'male', age: '35-40', ethnicity: 'caucasian', style: 'casual' },
  { name: 'Zara Mitchell', gender: 'female', age: '25-30', ethnicity: 'mixed', style: 'creative' },
  
  // Marketing
  { name: 'Pierre Dubois', gender: 'male', age: '40-45', ethnicity: 'caucasian', style: 'business' },
  { name: "Sarah O'Connor", gender: 'female', age: '30-35', ethnicity: 'caucasian', style: 'smart-casual' },
  { name: 'Mohammed Al-Rashid', gender: 'male', age: '35-40', ethnicity: 'middle-eastern', style: 'business' }
];

async function generateAndSaveImage(member) {
  const fileName = member.name.toLowerCase().replace(/\s+/g, '-') + '.jpg';
  const filePath = path.join(__dirname, '..', 'public', 'images', 'team', fileName);
  
  // Using thispersondoesnotexist.com API - it generates random faces
  const url = 'https://thispersondoesnotexist.com/image';
  
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Generated image for ${member.name}`);
          // Add a delay to prevent rate limiting
          setTimeout(resolve, 1000);
        });
      } else {
        reject(new Error(`Failed to download image for ${member.name}`));
      }
    });

    request.on('error', reject);
    
    // Set a timeout for the request
    request.setTimeout(5000, () => {
      request.destroy();
      reject(new Error(`Timeout while downloading image for ${member.name}`));
    });
  });
}

async function generateAllImages() {
  try {
    const teamFolder = path.join(__dirname, '..', 'public', 'images', 'team');
    if (!fs.existsSync(teamFolder)) {
      fs.mkdirSync(teamFolder, { recursive: true });
    }
    
    for (const member of teamMembers) {
      try {
        await generateAndSaveImage(member);
        // Add a delay between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(`Error generating image for ${member.name}:`, error.message);
        // Continue with next member even if one fails
        continue;
      }
    }
    
    console.log('Finished generating team member images!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateAllImages(); 