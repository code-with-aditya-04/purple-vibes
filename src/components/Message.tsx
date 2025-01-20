import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Happy Birthday to someone truly special! 💜
        Like in Spring Day, I want you to know Ill always be here for you, no matter how long or tough the journey gets. Youre my comfort, my best friend, and the one who lights up my world.
        In Save Me, they say, I just wanna be yours, and thats how I feel about staying by your side through every high and low. Wherever life takes you, I promise, like in Stay, youll always have me right here.
        Youre the Magic Shop in my life—a place of happiness and comfort—and I hope today brings you all the joy you deserve. Id run through anything, just like in Run, to see you smile because youre worth everything.
        On your birthday, remember the words from Make It Right: I can hold you tighter. Ill always have your back and be the one to lift you up. And in the spirit of My Time, youre my dream, someone Ill never let go of.
        So, heres to a beautiful day for a beautiful soul. I hope its full of love, laughter, and everything that makes your heart happy. Always remember, youre never alone—Ill always stay by your side. 💜
        Happy Birthday!”
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday
        </p>
      </motion.div>
    </div>
  );
};

export default Message;