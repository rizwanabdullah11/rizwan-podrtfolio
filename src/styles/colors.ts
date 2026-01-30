// Unified Color Palette for Portfolio
// Creates visual harmony and symmetry across all sections

export const colorPalette = {
  // Primary Brand Colors
  primary: {
    gradient: 'from-teal-500 to-emerald-600',
    solid: 'teal-600',
    light: 'teal-50',
    dark: 'teal-900',
  },

  // Section-specific gradients for visual symmetry
  sections: {
    hero: {
      gradient: 'from-teal-500 via-emerald-500 to-cyan-500',
      bg: 'from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
      accent: 'from-teal-400/20 to-emerald-500/20',
    },
    summary: {
      gradient: 'from-teal-500 to-emerald-600',
      bg: 'from-white via-teal-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-teal-500/5 to-emerald-500/5',
    },
    experience: {
      gradient: 'from-emerald-500 to-teal-600',
      bg: 'from-white via-emerald-50 to-teal-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-emerald-500/5 to-teal-500/5',
    },
    skills: {
      gradient: 'from-teal-500 to-cyan-600',
      bg: 'from-white via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-teal-500/5 to-cyan-500/5',
    },
    education: {
      gradient: 'from-cyan-500 to-teal-600',
      bg: 'from-white via-teal-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-cyan-500/5 to-teal-500/5',
    },
    projects: {
      gradient: 'from-emerald-500 to-cyan-600',
      bg: 'from-white via-emerald-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-emerald-500/5 to-cyan-500/5',
    },
    contact: {
      gradient: 'from-cyan-500 to-emerald-600',
      bg: 'from-white via-cyan-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
      accent: 'from-cyan-500/5 to-emerald-500/5',
    },
  },

  // Consistent badge colors
  badges: {
    primary: 'from-teal-500 to-emerald-600',
    secondary: 'from-emerald-500 to-cyan-600',
    accent: 'from-cyan-500 to-teal-600',
  },

  // Icon backgrounds
  icons: {
    primary: 'from-teal-500 to-emerald-600',
    secondary: 'from-emerald-500 to-teal-600',
    accent: 'from-cyan-500 to-teal-600',
  },

  // Status colors
  status: {
    success: 'from-emerald-500 to-teal-600',
    info: 'from-cyan-500 to-teal-600',
    warning: 'from-yellow-500 to-orange-600',
  },
};

// Helper function to get section colors
export const getSectionColors = (section: keyof typeof colorPalette.sections) => {
  return colorPalette.sections[section];
};
