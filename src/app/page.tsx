"use client";

import { Search, Zap, FlaskConical, Rocket, Calendar, MapPin, Users, CheckCircle, List } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Course Introduction */}
            <section>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Workshop: Claude Code
                <br />
                <span className="text-gray-600 dark:text-gray-400">AI Coding Assistant ที่ทรงพลัง</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                ค้นพบพลังของ AI ในการพัฒนาซอฟต์แวร์สมัยใหม่! ใน Workshop นี้ คุณจะได้เรียนรู้การใช้ Claude Code 
                ซึ่งเป็น AI Assistant ที่ทรงพลังที่สุดสำหรับนักพัฒนา ตั้งแต่การสำรวจ Codebase ขนาดใหญ่ 
                ไปจนถึงการสร้างฟีเจอร์ใหม่ และแก้ไขปัญหาต่างๆ ด้วยความรวดเร็วและแม่นยำ
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                ไม่ว่าคุณจะเป็นนักพัฒนาที่ต้องการเพิ่มประสิทธิภาพในการทำงาน หรือ Tech Lead ที่ต้องการนำทีมให้ก้าวทันเทคโนโลยี 
                Workshop นี้จะช่วยให้คุณเข้าใจและใช้ประโยชน์จาก AI ในการเขียนโค้ดได้อย่างเต็มศักยภาพ
              </p>
            </section>

            {/* What You'll Learn */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">สิ่งที่คุณจะได้เรียนรู้</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Search size={32} /></div>
                  <h3 className="font-semibold mb-2">สำรวจ Codebase</h3>
                  <p className="text-gray-600 dark:text-gray-400">เรียนรู้การนำทางและเข้าใจโครงสร้างโค้ดที่ซับซ้อน</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Zap size={32} /></div>
                  <h3 className="font-semibold mb-2">พัฒนาฟีเจอร์</h3>
                  <p className="text-gray-600 dark:text-gray-400">สร้างฟีเจอร์ใหม่ด้วย AI Assistant อย่างมีประสิทธิภาพ</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><FlaskConical size={32} /></div>
                  <h3 className="font-semibold mb-2">ทดสอบและแก้บัก</h3>
                  <p className="text-gray-600 dark:text-gray-400">เทคนิคการ Debug และ Testing ด้วย AI</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Rocket size={32} /></div>
                  <h3 className="font-semibold mb-2">Deploy และ GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">ผสานรวมการทำงานกับ GitHub และ Deployment</p>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section>
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
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-gray-800 dark:border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">{index + 1}. {item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">เกี่ยวกับผู้สอน</h2>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center text-white dark:text-gray-800 text-4xl font-bold">
                    K
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Kamol Treewatchararat</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">SaijaiAI LLC | AI Engineer</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      ผู้เชี่ยวชาญด้าน AI และ Machine Learning พร้อมประสบการณ์ในการพัฒนา Software Engineering
                      จบการศึกษาจาก University of Southern California และได้รับการ Certification หลากหลายสาขา
                      ทั้ง Natural Language Processing, MLOps และ Generative AI
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        Machine Learning
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        AI Software Engineering
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        NLP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Thai Landing Page — Claude Code Workshop</div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">ภาพรวมกิจกรรม</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-white font-medium">วันที่: <span className="font-normal">TBD</span></span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-white font-medium">สถานที่: <span className="font-normal">TBD</span></span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <List size={20} className="text-gray-600 dark:text-gray-400 mt-1" />
                    <span className="text-gray-900 dark:text-white font-medium">รูปแบบ: <span className="font-normal">เวิร์กช็อปแบบลงมือทำ (เครื่องของผู้เรียน) + การนำเสนอ</span></span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gray-600 dark:text-gray-400 mt-1" />
                    <span className="text-gray-900 dark:text-white font-medium">ผู้เข้าร่วมควรมีพื้นฐานการพัฒนาเว็บ/สคริปต์ และ Git ขั้นพื้นฐาน</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://forms.gle/placeholder', '_blank')}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200"
                >
                  จองสิทธิใน Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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