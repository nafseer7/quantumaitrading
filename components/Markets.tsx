"use client";
import { motion } from 'framer-motion';
import { Card, Title, Text, TabList, Tab, TabGroup, TabPanels, TabPanel } from '@tremor/react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const marketData = [
  {
    pair: 'BTC/USD',
    price: '52,345.67',
    change: '+2.45%',
    volume: '1.2B',
    isPositive: true,
  },
  {
    pair: 'ETH/USD',
    price: '2,845.12',
    change: '-1.23%',
    volume: '845M',
    isPositive: false,
  },
  {
    pair: 'SOL/USD',
    price: '123.45',
    change: '+5.67%',
    volume: '456M',
    isPositive: true,
  },
  {
    pair: 'ADA/USD',
    price: '1.23',
    change: '+3.21%',
    volume: '234M',
    isPositive: true,
  },
];

const Markets = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-light to-white dark:from-dark dark:to-dark-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-6">
            Real-Time Markets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Live{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Market Data
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with real-time cryptocurrency market prices and trading volumes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl transform -rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl transform rotate-1"></div>
          <Card className="relative bg-white/70 dark:bg-dark-card/70 backdrop-blur-xl rounded-2xl shadow-xl">
            <TabGroup>
              <TabList className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 mb-8">
                <Tab className="px-6 py-3 text-sm font-medium focus:outline-none">
                  All Markets
                </Tab>
                <Tab className="px-6 py-3 text-sm font-medium focus:outline-none">
                  Spot
                </Tab>
                <Tab className="px-6 py-3 text-sm font-medium focus:outline-none">
                  Futures
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-4 gap-4 mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 px-4">
                      <div>Trading Pair</div>
                      <div>Price</div>
                      <div>24h Change</div>
                      <div>Volume</div>
                    </div>
                    {marketData.map((item, index) => (
                      <motion.div
                        key={item.pair}
                        variants={itemVariants}
                        className="group grid grid-cols-4 gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <div className="font-medium text-gray-900 dark:text-white">
                          {item.pair}
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          ${item.price}
                        </div>
                        <div
                          className={`flex items-center ${
                            item.isPositive
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {item.isPositive ? (
                            <ArrowUpIcon className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowDownIcon className="w-4 h-4 mr-1" />
                          )}
                          {item.change}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          ${item.volume}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <div className="h-96 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <p className="text-lg">Spot trading data coming soon</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="h-96 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <p className="text-lg">Futures trading data coming soon</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Markets; 