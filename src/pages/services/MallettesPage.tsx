import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcaseMedical, 
  faStethoscope, 
  faHeartbeat, 
  faUserMd,
  faCalendarCheck,
  faCheckCircle,
  faWifi,
  faBatteryFull,
  faShieldAlt,
  faMicroscope,
  faTabletAlt,
  faThermometerHalf,
  faEye,
  faTooth,
  faWeight,
  faDroplet,
  faSolarPanel,
  faCamera
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, Calendar, Users, MapPin, Zap, Shield, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionForm from '../../components/SolutionForm';

const MallettesPage: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  const formFields = [
    { name: "entityName", label: "Nom de l'entité", type: "text" },
    { name: "country", label: "Pays & ville", type: "text" },
    { name: "projectManager", label: "Responsable du projet / Fonction", type: "text" },
    { name: "phone", label: "Téléphone / WhatsApp", type: "tel" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "quantity", label: "Nombre de mallettes envisagées", type: "number" },
    { name: "targetAreas", label: "Zone(s) d'intervention ciblée(s)", type: "text" },
    { name: "objective", label: "Objectif du projet", type: "textarea" },
    { name: "message", label: "Message complémentaire", type: "textarea" },
  ];

  const equipments = [
    {
      name: "Tablette connectée sécurisée",
      role: "Interface principale pour l'enregistrement, la transmission des données et la vidéoconsultation",
      icon: faTabletAlt
    },
    {
      name: "Tensiomètre électronique connecté",
      role: "Mesure de la tension artérielle, utile pour le suivi HTA, grossesse, cardiologie",
      icon: faHeartbeat
    },
    {
      name: "Oxymètre de pouls",
      role: "Mesure de la saturation en oxygène, utile en pneumologie et suivi COVID",
      icon: faUserMd
    },
    {
      name: "Thermomètre infrarouge",
      role: "Mesure sans contact de la température corporelle",
      icon: faThermometerHalf
    },
    {
      name: "Glucomètre connecté",
      role: "Contrôle de la glycémie pour le suivi du diabète",
      icon: faDroplet
    },
    {
      name: "Électrocardiogramme portable (ECG)",
      role: "Analyse de l'activité cardiaque (rythme, anomalies) avec transmission au cardiologue",
      icon: faHeartbeat
    },
    {
      name: "Stéthoscope numérique",
      role: "Auscultation numérique à distance (cœur, poumons, abdomen)",
      icon: faStethoscope
    },
    {
      name: "Otoscope numérique HD",
      role: "Inspection des oreilles (ORL, pédiatrie), avec image envoyée au spécialiste",
      icon: faEye
    },
    {
      name: "Dermatoscope numérique HD",
      role: "Analyse des lésions cutanées en dermatologie",
      icon: faMicroscope
    },
    {
      name: "Caméra de consultation HD",
      role: "Prise d'images des patients ou zones examinées pour la documentation ou la télé-expertise",
      icon: faCamera
    },
    {
      name: "Balance électronique avec IMC",
      role: "Évaluation du poids, de la croissance et calcul de l'IMC, utile en nutrition infantile",
      icon: faWeight
    },
    {
      name: "Hémocue",
      role: "Mesure rapide du taux d'hémoglobine capillaire pour le dépistage de l'anémie",
      icon: faDroplet
    },
    {
      name: "Batterie externe / Panneau solaire",
      role: "Autonomie énergétique en zones sans électricité, recharge des équipements",
      icon: faSolarPanel
    }
  ];

  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Télétransmission des données médicales en temps réel",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Capture d'images / vidéos pour télé-expertise",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stockage sécurisé des dossiers patients (RGPD / HDS)",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Compatible avec les plateformes nationales et régionales de santé digitale",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Utilisation en autonomie électrique (jusqu'à 8h) – alimentation par panneau solaire possible",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connexion en 4G/5G, Wifi, ou satellite selon la zone",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const useCases = [
    {
      title: "Santé maternelle et infantile",
      icon: "🤰",
      items: [
        {
          text: "Suivi de la grossesse en zone rurale (TA, protéinurie, poids, monitoring cardiaque)",
          icon: faHeartbeat
        },
        {
          text: "Détection précoce de complications (pré-éclampsie, diabète gestationnel)",
          icon: faUserMd
        },
        {
          text: "Téléconsultation en post-partum, suivi du nourrisson (température, saturation, poids)",
          icon: faStethoscope
        }
      ]
    },
    {
      title: "Cardiologie",
      icon: "❤️",
      items: [
        {
          text: "Réalisation d'un ECG 12 dérivations et transmission à un cardiologue",
          icon: faHeartbeat
        },
        {
          text: "Surveillance à distance de patients hypertendus",
          icon: faUserMd
        },
        {
          text: "Évaluation de l'état cardiovasculaire avant évacuation",
          icon: faStethoscope
        }
      ]
    },
    {
      title: "Pneumologie",
      icon: "🫁",
      items: [
        {
          text: "Suivi de patients asthmatiques ou BPCO",
          icon: faStethoscope
        },
        {
          text: "Détection de signes d'insuffisance respiratoire via oxymètre + auscultation numérique",
          icon: faUserMd
        },
        {
          text: "Télésurveillance post-COVID ou tuberculose",
          icon: faHeartbeat
        }
      ]
    },
    {
      title: "Dermatologie",
      icon: "🖐",
      items: [
        {
          text: "Capture d'images HD de lésions cutanées",
          icon: faCamera
        },
        {
          text: "Télé-expertise avec un dermatologue en ville ou à l'étranger",
          icon: faMicroscope
        },
        {
          text: "Suivi de traitements (ulcères, mycoses, lésions cancéreuses)",
          icon: faEye
        }
      ]
    },
    {
      title: "Diabétologie",
      icon: "🩸",
      items: [
        {
          text: "Suivi du taux de glycémie en mobilité",
          icon: faDroplet
        },
        {
          text: "Éducation thérapeutique en zone enclavée",
          icon: faUserMd
        },
        {
          text: "Surveillance des complications (plaies, neuropathies)",
          icon: faStethoscope
        }
      ]
    },
    {
      title: "Environnement militaire / situations de crise",
      icon: "🪖",
      items: [
        {
          text: "Déploiement rapide sur le terrain (zones de conflit, camps de réfugiés)",
          icon: faBriefcaseMedical
        },
        {
          text: "Diagnostic et surveillance de soldats en zone isolée",
          icon: faUserMd
        },
        {
          text: "Intégration dans véhicules ou tentes médicales de campagne",
          icon: faStethoscope
        }
      ]
    }
  ];

  const advantages = [
    {
      text: "Accessibilité médicale renforcée en zone rurale",
      icon: faStethoscope
    },
    {
      text: "Réduction des délais de diagnostic",
      icon: faUserMd
    },
    {
      text: "Gain de temps pour les professionnels de santé",
      icon: faHeartbeat
    },
    {
      text: "Renforcement du lien ville-campagne / spécialiste-généraliste",
      icon: faWifi
    },
    {
      text: "Intégration possible dans des projets financés (AFD, ONG, État)",
      icon: faBriefcaseMedical
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 african-pattern-1 opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <FontAwesomeIcon icon={faBriefcaseMedical} className="text-2xl" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Mallettes de télémédecine
                </span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              « La technologie médicale, à portée de main, même hors des hôpitaux »
            </p>
            <motion.button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="animate-pulse" />
              Prendre Rendez-vous
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 pb-20">
        {/* Description */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-2 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faStethoscope} className="text-primary-600" />
                Qu'est-ce qu'une mallette de télémédecine ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                La mallette de télémédecine DIGIHEALTH4AFRICA est un dispositif portable, robuste et autonome, 
                conçu pour permettre à tout professionnel de santé — infirmier, médecin, sage-femme ou agent 
                communautaire — d'effectuer des consultations médicales complètes à distance, en tout lieu, 
                même sans structure hospitalière à proximité.
              </p>
              <div className="mt-8">
                <motion.button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Prendre Rendez-vous
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Equipment Table */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Contenu de la mallette
            </span>
          </h2>
          <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Appareil médical</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Rôle dans la téléconsultation</th>
                  </tr>
                </thead>
                <tbody>
                  {equipments.map((equipment, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <FontAwesomeIcon icon={equipment.icon} className="text-primary-600" />
                          <span className="font-medium text-gray-900 dark:text-white">{equipment.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{equipment.role}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <motion.button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                Prendre Rendez-vous
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Fonctionnalités clés
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 hover:border-primary-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{feature.title}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              Prendre Rendez-vous
            </motion.button>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Cas d'usage par spécialité médicale
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{useCase.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={item.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              Prendre Rendez-vous
            </motion.button>
          </div>
        </motion.section>

        {/* Advantages */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 african-pattern-3 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Avantages pour votre établissement ou projet
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FontAwesomeIcon icon={advantage.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{advantage.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/30 via-white/20 to-accent-50/30 dark:from-primary-900/20 dark:via-gray-800/20 dark:to-accent-900/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Intéressé par une démonstration ?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Remplissez le formulaire dédié pour que notre équipe vous contacte et évalue avec vous vos besoins 
                (nombre de mallettes, types de spécialités, zone d'intervention, langue, connectivité…).
              </p>
              <motion.button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="animate-pulse" />
                Prendre Rendez-vous
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcaseMedical} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mallettes de télémédecine</h3>
                    <p className="text-white/80">Prendre rendez-vous</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <SolutionForm
                fields={formFields}
                solutionTitle="Mallettes de télémédecine"
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MallettesPage;