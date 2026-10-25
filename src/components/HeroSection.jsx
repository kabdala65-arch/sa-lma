import { motion } from 'framer-motion'
import { useImageFallback } from '../hooks/useImageFallback'
import './HeroSection.css'

export default function HeroSection() {
  const { src, failed, onError } = useImageFallback('/images/profile')

  return (
    <section className="hero-section">
      <motion.div
        className="hero-profile"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="hero-profile-ring">
          <div className="hero-profile-photo">
            {!failed ? (
              <img src={src} alt="سلمي" onError={onError} loading="eager" />
            ) : (
              <span className="hero-profile-fallback">♥</span>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="badge-pill"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="badge-sparkle">✦</span>
        <span>اسم على مسمّى.. سلام قلبي</span>
        <span className="badge-heart">♥</span>
      </motion.div>

      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
      >
        سلمي
      </motion.h1>

      <motion.div
        className="hero-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        26 / 6 / 2026
      </motion.div>

      <motion.div
        className="hero-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <span>♥</span>
      </motion.div>

      <motion.p
        className="hero-quote"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.9 }}
      >
        من يوم 26/6/2026 والدنيا شكلها اتغيّر قدام عنيا <span className="inline-heart">♥</span><br /><br />
        مش عارف أوصفلك بالظبط إيه اللي اتغيّر، بس فيه حاجة جوايا هديت واطمّنت من ساعة ما دخلتي حياتي.<br />
        اللي في قلبي ليكي أكبر بكتير من إني أحطه كله في موقع، بس عملتلك المكان ده عشان تشوفي جزء صغير منه،<br />
        وتعرفي إنك أحلى حاجة حصلتلي، وإن اسمك طالع على مسمّاه يا سلمي.. إنتي فعلاً السلام اللي قلبي كان محتاجه ❤️
      </motion.p>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
      >
        <span>اكتشفي قصتنا</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  )
}
