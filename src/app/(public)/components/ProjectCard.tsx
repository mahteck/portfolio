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
<<<<<<< HEAD
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl backdrop-blur"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-sky-500/10 to-emerald-500/10" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-emerald-400 to-sky-500 text-lg font-bold text-slate-950 shadow-md">
          {title.charAt(0)}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300/80">
            Featured Project
          </div>
          <h3 className="mt-1 text-lg font-semibold text-slate-50">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-300/90">{description}</p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between">
=======
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
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md transition hover:brightness-110"
        >
          View Live Project
          <span className="text-base leading-none">↗</span>
        </a>

        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {new URL(link).hostname.replace("www.", "")}
        </span>
=======
          className="block mt-1 text-md leading-tight font-medium text-gray-800 hover:underline"
        >
          {description}
        </a>
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
      </div>
    </motion.div>
  );
};

export default ProjectCard;