// Unified Color Palette for Portfolio
// Creates visual harmony and symmetry across all sections

export const colorPalette = {
  primary: {
    solid: 'orange-500',
    hover: 'orange-600',
    light: 'orange-50',
    dark: 'orange-950',
    orange: '#f97316',
    white: '#ffffff',
  },

  sections: {
    hero: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-900',
    },
    summary: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
    experience: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
    skills: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
    education: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
    projects: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
    contact: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white dark:bg-gray-800',
    },
  },

  badges: {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
  },

  icons: {
    primary: 'bg-orange-500 text-white',
  },
};

// Helper function to get section colors
export const getSectionColors = (section: keyof typeof colorPalette.sections) => {
  return colorPalette.sections[section];
};
