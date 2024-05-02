import React, { useEffect, useState, useRef } from 'react';
import { Button, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const delay = 5000;
const card = [
  { url: '/assets/img/launchpad.png', link: 'http://ieo.mglcoin.io/' },
  { url: '/assets/img/tokeninfo.png', link: 'http://info.mglcoin.io/' },
  { url: '/assets/img/defi.png', link: 'http://defi.mglcoin.io/' },
  { url: '/assets/img/shopping.png', link: 'http://exchange.mglcoin.io/' },
];

function Mark() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex(prevIndex => (prevIndex === card.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-11/12 xl:w-5/6 m-auto mt-8 overflow-hidden">
      <motion.div className="whitespace-nowrap slide" style={{ transform: `translate3d(${-1 * index * 100}%, 0, 0)` }}>
        
        <Row gutter={[16, 16]}>
          {card.map((item, idx) => (
            <Col key={idx} sm={24} md={6} className="p-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                
                <img src={item.url} alt={item.link} />
                <a href={item.link}>Link</a>
                <Button type="primary">Click me</Button> 
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
}

export default Mark;
