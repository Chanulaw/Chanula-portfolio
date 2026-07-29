import { motion } from 'framer-motion';

const ProjectCard = ({ title, tech, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
      style={{
        padding: '30px',
        border: '1px solid #eaeaea',
        borderRadius: '2px',
        backgroundColor: '#fff'
      }}
    >
      <span style={{ fontSize: '0.7rem', color: '#CD7F32', letterSpacing: '2px', fontWeight: 'bold' }}>
        {tech}
      </span>
      <h3 style={{ margin: '15px 0 10px 0', fontWeight: '500', color: '#1a1a1a' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
  );
};

export default ProjectCard;