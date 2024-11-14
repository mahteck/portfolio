import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <img
        className="h-48 w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">
          {title}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1 text-md leading-tight font-medium text-gray-800 hover:underline"
        >
          {description}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;