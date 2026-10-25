import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'يعني الدنيا تبقى هادية زيادة عن اللزوم من غير صوتك',
  'يعني أبقى وسط ناس كتير وعيني بتدوّر عليكي إنتي',
  'يعني أمسك التليفون كل شوية أشوف لو كتبتيلي',
  'يعني أي حاجة حلوة تحصل، إنتي أول واحدة أحب أحكيلها',
  'يعني أضحك مع الناس وقلبي معاكي',
  'يعني كل حاجة حواليا بتفكّرني بيكي',
  'يعني إنتي أول حد بفكر فيه لما أصحى، وآخر حد قبل ما أنام',
  'يعني صوتك بس اللي بيهدّيني، ولو غاب بحس إن اليوم تقيل',
  'يعني من غيرك بكون تايه شوية، وإنتي اللي بترجّعيني لنفسي',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتيني</span>
        <h2 className="section-title">كلمة "وحشتيني" مش بسيطة خالص</h2>
        <p className="section-subtitle">
          فيها معاني كتير أوي يا سلمي، خليكي معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتيني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        وخلاصة الكلام كله.. وحشتيني أوي يا سلمي 😂♥♥
      </motion.p>
    </section>
  )
}
