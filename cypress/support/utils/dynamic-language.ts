const messages = {
  en: {
    required: 'Required',
    weakPassword: 'Your password is too weak',
    passwordNoMatch: 'Your passwords do not match',
    invalidEmail: 'Invalid email address',
    accountAlreadyEXists: 'Account already exists',
    genericError: 'Something\'s not right here. Please give us a call at 1-833-452-3541 to continue.',
    success: 'Account created successfully',
    labels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Mobile phone number',
      password: 'Password',
      confirmPassword: 'Confirm password',
      province: 'Province'
    }, 
    provinces: {
        Ontario: 'Ontario',
        Quebec: 'Quebec',
        BritishColumbia: 'British-Columbia',
        Alberta: 'Alberta',
        Manitoba: 'Manitoba',
        NovaScotia: 'Nova Scotia',
        NewBrunswick: 'New Brunswick',
        NewfoundlandAndLabrador: 'Newfoundland and Labrador',
        PrinceEdwardIsland: 'Prince Edward Island',
        Saskatchewan: 'Saskatchewan'
    }
  },
  fr: {
    required: 'Requis',
    weakPassword: 'Veuillez choisir un mot de passe plus sûr',
    passwordNoMatch: 'Vos mots de passe ne correspondent pas.',
    invalidEmail: 'Courriel invalide',
    accountAlreadyEXists: 'Le compte existe déjà',
    genericError: 'Il semble y avoir un petit problème. Pour poursuivre, veuillez nous appeler au 1-833-452-3267',
    success: 'Compte créé avec succès',
    labels: {
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'Courriel',
      phone: 'Numéro de cellulaire',
      password: 'Mot de passe',
      confirmPassword: 'Confirmez votre mot de passe',
      province: 'Province'
    },
    provinces: {
        Ontario: 'Ontario',
        Quebec: 'Québec',
        BritishColumbia: 'Colombie-Britannique',
        Alberta: 'Alberta', 
        Manitoba: 'Manitoba',
        NovaScotia: 'Nouvelle-Écosse',
        NewBrunswick: 'Nouveau-Brunswick',
        NewfoundlandAndLabrador: 'Terre-Neuve-et-Labrador',
        PrinceEdwardIsland: 'Île-du-Prince-Édouard',
        Saskatchewan: 'Saskatchewan'
  }
}
};

export function getMessage(key: keyof typeof messages['en']): string {
  const lang = Cypress.env('language') || 'en';
  return messages[lang][key];
}

export function getLabel(key: keyof typeof messages['en']['labels']): string {
  const lang = Cypress.env('language') || 'en';
  return messages[lang].labels[key];
}

export function getProvince(name: keyof typeof messages['en']['provinces']): string {
  const lang = Cypress.env('language') || 'en';
  return messages[lang].provinces[name];
}
