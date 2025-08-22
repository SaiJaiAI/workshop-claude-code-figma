"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Workshop: Claude Code
            <br />
            <span className="text-blue-600">AI Coding Assistant ที่ทรงพลัง</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-400">
            เรียนรู้การใช้ AI ในการพัฒนาซอฟต์แวร์อย่างมืออาชีพ<br/>ใน Workshop หนึ่งวันเต็มกับผู้เชี่ยวชาญ
          </p>
          <button 
            onClick={() => window.open('https://forms.gle/placeholder', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            เข้าร่วม Waitlist
          </button>
          <p className="mt-4 text-sm text-gray-500">
            * Google Form URL จะอัพเดตในภายหลัง
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">สิ่งที่คุณจะได้เรียนรู้</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-4">🔍</div>
              <h3 className="font-semibold mb-2">สำรวจ Codebase</h3>
              <p className="text-gray-600 dark:text-gray-400">เรียนรู้การนำทางและเข้าใจโครงสร้างโค้ดที่ซับซ้อน</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">พัฒนาฟีเจอร์</h3>
              <p className="text-gray-600 dark:text-gray-400">สร้างฟีเจอร์ใหม่ด้วย AI Assistant อย่างมีประสิทธิภาพ</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-4">🧪</div>
              <h3 className="font-semibold mb-2">ทดสอบและแก้บัก</h3>
              <p className="text-gray-600 dark:text-gray-400">เทคนิคการ Debug และ Testing ด้วย AI</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">Deploy และ GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400">ผสานรวมการทำงานกับ GitHub และ Deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">หลักสูตร</h2>
          <div className="space-y-4">
            {[
              { title: "Claude Code Architecture", desc: "ทำความเข้าใจโครงสร้างและการทำงาน" },
              { title: "Codebase Navigation", desc: "เทคนิคการสำรวจและเข้าใจโค้ด" },
              { title: "Context Management", desc: "การจัดการบริบทให้มีประสิทธิภาพ" },
              { title: "Feature Development", desc: "พัฒนาฟีเจอร์ใหม่ด้วย AI" },
              { title: "Testing and Debugging", desc: "การทดสอบและแก้ไขปัญหา" },
              { title: "GitHub Integration", desc: "ผสานรวมกับ GitHub Workflow" },
              { title: "Jupyter Notebook Refactoring", desc: "ปรับปรุงและพัฒนา Notebook" },
              { title: "Web App Development", desc: "สร้าง Web App จาก Mockup" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="font-semibold text-lg mb-2">{index + 1}. {item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">รายละเอียด Workshop</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">📅</div>
              <h3 className="font-semibold text-xl mb-2">วันเวลา</h3>
              <p className="text-gray-600 dark:text-gray-400">วันหยุดสุดสัปดาห์<br/>หนึ่งวันเต็ม (8+ ชั่วโมง)<br/>TBD</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-xl mb-2">สถานที่</h3>
              <p className="text-gray-600 dark:text-gray-400">TBD<br/>รายละเอียดจะแจ้งให้ทราบ<br/>ในภายหลัง</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">👥</div>
              <h3 className="font-semibold text-xl mb-2">เหมาะสำหรับ</h3>
              <p className="text-gray-600 dark:text-gray-400">นักพัฒนา Software<br/>ที่มีพื้นฐาน Python และ Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">เกี่ยวกับผู้สอน</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                K
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Kamol Treewatchararat</h3>
                <p className="text-blue-600 font-semibold mb-4">SaijaiAI LLC | AI Engineer</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  ผู้เชี่ยวชาญด้าน AI และ Machine Learning พร้อมประสบการณ์ในการพัฒนา Software Engineering
                  จบการศึกษาจาก University of Southern California และได้รับการ Certification หลากหลายสาขา
                  ทั้ง Natural Language Processing, MLOps และ Generative AI
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    AI Software Engineering
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    NLP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h2>
          <p className="text-xl mb-8 opacity-90">
            เข้าร่วม Waitlist เพื่อรับข้อมูลล่าสุดเกี่ยวกับวันเวลาและสถานที่จัด Workshop
          </p>
          <button 
            onClick={() => window.open('https://forms.gle/placeholder', '_blank')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            เข้าร่วม Waitlist ฟรี
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2024 SaijaiAI LLC. All rights reserved.</p>
          <p className="text-gray-400">
            Workshop inspired by Claude Code course materials. 
            Conducted independently by Kamol Treewatchararat.
          </p>
        </div>
      </footer>
    </div>
  );
}
