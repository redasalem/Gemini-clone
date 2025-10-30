
// ملف: config/gemini.js
// (الأمثل للاستخدام في React Components مع بيئة Vite)

import { GoogleGenAI } from '@google/genai';

// ***************************************************************
// 1. قراءة المتغير البيئي بشكل صحيح في Vite:
// يجب أن يكون المتغير مُسمى VITE_GEMINI_API_KEY في ملف .env.local
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
// ***************************************************************

// 2. تهيئة العميل (Client Initialization)
const ai = new GoogleGenAI({ apiKey: API_KEY });


/**
 * دالة لإرسال رسالة المستخدم إلى نموذج Gemini
 * @param {string} prompt - النص المُرسل من المستخدم
 * @returns {Promise<string>} - الرد النصي من Gemini
 */
async function runChat(prompt) {
    // تحقق سريع من وجود المفتاح
    if (!API_KEY) {
        console.error("Gemini API Key is not configured (VITE_GEMINI_API_KEY is missing).");
        return "عذراً، لم يتم إعداد مفتاح API. يرجى مراجعة ملف .env.local";
    }
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', 
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        // التأكد من أن الرد يحتوي على نص قبل إرجاعه
        //  console.log(response.text);
        return response.text;
        
    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        // في حالة وجود خطأ في الاتصال أو المفتاح
        return "حدث خطأ غير متوقع أثناء الاتصال بخدمة الذكاء الاصطناعي.";
    }
}

// 3. تصدير الدالة للاستخدام في مكونات React
export { runChat };