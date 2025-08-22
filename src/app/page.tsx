"use client";

import Image from "next/image";
import { Search, Zap, FlaskConical, Rocket, Calendar, MapPin, CheckCircle, List, ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-4 px-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 px-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const faqs = [
    {
      question: "เวิร์กช็อปนี้แตกต่างจากการเรียนคอร์สออนไลน์ฟรีอย่างไร?",
      answer: "คอร์สออนไลน์จะให้ความรู้เชิงทฤษฎีและตัวอย่างเบื้องต้น แต่เวิร์กช็อปนี้เน้นการลงมือทำจริงกับโจทย์ที่ใกล้เคียงกับการทำงานจริง ผู้เรียนจะได้รับการโค้ชและคำแนะนำแบบโต้ตอบ ทำให้สามารถปรับใช้ได้อย่างมีประสิทธิภาพมากขึ้น"
    },
    {
      question: "ผู้เข้าร่วมควรมีพื้นฐานอะไรบ้าง?",
      answer: "ควรมีประสบการณ์ในการพัฒนาโปรแกรมเบื้องต้น เช่น การใช้ Python หรือ JavaScript/TypeScript และควรเข้าใจการใช้งาน Git, CLI และการรันเทสต์อัตโนมัติ เพื่อให้สามารถทำกิจกรรมได้อย่างราบรื่น"
    },
    {
      question: "ต้องใช้ภาษาโปรแกรมใด?",
      answer: "เวิร์กช็อปมุ่งเน้นแนวคิดและเวิร์กโฟลว์ที่ใช้ได้กับหลายภาษาเป็นหลัก ตัวอย่างจะยกมาจาก Python และ TypeScript เป็นหลัก แต่สามารถปรับใช้กับภาษาอื่น ๆ ได้เช่นกัน"
    },
    {
      question: "จะได้รับเนื้อหาอะไรกลับไป?",
      answer: "ผู้เข้าร่วมจะได้รับเวิร์กบุ๊ก, โค้ดตัวอย่าง, เทมเพลต prompt และแนวทางปฏิบัติที่ดีในการใช้ Claude Code ซึ่งสามารถนำไปปรับใช้และต่อยอดกับทีมงานจริงได้ทันที"
    },
    {
      question: "ถ้าไม่เคยใช้ Claude Code มาก่อนจะเข้าร่วมได้หรือไม่?",
      answer: "สามารถเข้าร่วมได้ แต่ควรเตรียมบัญชีที่สามารถเข้าถึง Claude Code หรือเครื่องมือที่รองรับเทียบเท่า เพื่อจะได้ทำกิจกรรมแฮนด์ออนได้ครบถ้วน"
    },
    {
      question: "รูปแบบการเรียนเป็นอย่างไร?",
      answer: "ผู้เรียนจะได้เรียนรู้แบบผสมผสาน ทั้งการบรรยายสั้น ๆ เพื่อปูพื้นฐาน และกิจกรรมแฮนด์ออนแบบลงมือทำจริง โดยใช้กรณีศึกษาที่ออกแบบมาให้ใกล้เคียงการใช้งานจริง"
    },
    {
      question: "มีค่าใช้จ่ายหรือไม่?",
      answer: "รายละเอียดเรื่องค่าใช้จ่ายจะประกาศเมื่อกำหนดวันและสถานที่จัดงานแล้ว โดยจะแจ้งให้ผู้ที่อยู่ในรายชื่อ Waitlist ทราบล่วงหน้า"
    },
    {
      question: "เวิร์กช็อปนี้เหมาะสำหรับใคร?",
      answer: "เหมาะสำหรับวิศวกรซอฟต์แวร์, Tech lead, ผู้พัฒนาผลิตภัณฑ์ และผู้จัดการทีมที่ต้องการยกระดับความเร็วและคุณภาพการพัฒนาโค้ดผ่านการใช้ AI ช่วยอย่างเป็นระบบ"
    },
    {
      question: "ถ้าต้องการนำความรู้ไปประยุกต์ใช้ในองค์กร ควรทำอย่างไร?",
      answer: "หลังจากจบเวิร์กช็อป ผู้เรียนจะมีแนวทางการออกแบบเวิร์กโฟลว์และมาตรการ guardrails ที่สามารถนำไปประยุกต์กับการพัฒนาในองค์กร เช่น การสร้างมาตรฐานโค้ดรีวิวและการจัดการความเสี่ยงจากการใช้ AI"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Course Introduction */}
            <section>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Claude Code AI Coding Assistant with Figma and Playwright MCP
                <br />
                <span className="text-2xl text-gray-600 dark:text-gray-400">SaiJaiAI Workshop Series</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                เรียนรู้การใช้ Claude Code อย่างเต็มศักยภาพผ่านการลงมือทำจริง ตั้งแต่การเชื่อมต่อ MCP Services
                เช่น Playwright และ Figma Development Server การแปลง Jupyter Notebook เป็น Streamlit App
                ไปจนถึงการผสานรวมกับ GitHub Workflow แบบมืออาชีพ
              </p>
              <p className="text-base text-gray-600 dark:text-gray-200 leading-relaxed">
                Workshop นี้เน้นการปฏิบัติจริง ผู้เรียนจะได้เรียนรู้เทคนิคขั้นสูงอย่าง Plan Mode, Think Hard
                และการเขียน Test ที่จะช่วยเพิ่มประสิทธิภาพในการพัฒนาซอฟต์แวร์ด้วย AI อย่างมีระบบ
              </p>
            </section>

            {/* What You'll Learn */}
            <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">สิ่งที่คุณจะได้เรียนรู้</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Search size={32} /></div>
                  <h3 className="font-semibold mb-2">MCP Integrations</h3>
                  <p className="text-gray-600 dark:text-gray-400">เชื่อมต่อ Playwright และ Figma MCP กับ Claude Code</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Zap size={32} /></div>
                  <h3 className="font-semibold mb-2">Notebook to Web App</h3>
                  <p className="text-gray-600 dark:text-gray-400">แปลง Jupyter Notebook เป็น Streamlit App ได้อย่างรวดเร็ว</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><FlaskConical size={32} /></div>
                  <h3 className="font-semibold mb-2">GitHub Integration</h3>
                  <p className="text-gray-600 dark:text-gray-400">ตั้งค่าและทำงานร่วมกับ GitHub ผ่าน Claude Code</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="text-gray-600 dark:text-gray-400 mb-4"><Rocket size={32} /></div>
                  <h3 className="font-semibold mb-2">Advanced Techniques</h3>
                  <p className="text-gray-600 dark:text-gray-400">Plan Mode, Think Hard และเทคนิคการเขียน Test</p>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">หลักสูตร</h2>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>การติดตั้ง Claude Code กับ VS Code และเลือก Model ที่เหมาะสม</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>เชื่อมต่อ Playwright MCP กับ Claude Code สำหรับการทดสอบ Web</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>เชื่อมต่อ Figma MCP เพื่อการพัฒนาจาก Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>แปลง Jupyter Notebook เป็น Streamlit App ที่ใช้งานได้จริง</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>การตั้งค่าและใช้งาน Claude Code กับ GitHub Workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400">•</span>
                    <span>เทคนิคขั้นสูง: Plan Mode, Think Hard และการเขียน Test</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">คำถามที่พบบ่อย</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12">เกี่ยวกับผู้สอน</h2>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://avatars.githubusercontent.com/u/1384845?v=4"
                      alt="Kamol Treewatchararat"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
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
                  onClick={() => window.open('https://forms.gle/hZyQwwaKVkjTeuYa9', '_blank')}
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
        </div>
      </footer>
    </div>
  );
}