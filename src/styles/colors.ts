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
      bg: 'bg-white',
    },
    summary: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
    experience: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
    skills: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
    education: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
    projects: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
    contact: {
      accent: 'from-orange-500/10 to-orange-500/5',
      bg: 'bg-white',
    },
  },

  badges: {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-orange-50 text-orange-700',
  },

  icons: {
    primary: 'bg-orange-500 text-white',
  },
};

// Helper function to get section colors
export const getSectionColors = (section: keyof typeof colorPalette.sections) => {
  return colorPalette.sections[section];
};
