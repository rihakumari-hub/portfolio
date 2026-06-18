import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ask-ai-dialog-component',
  imports: [MatDialogModule, MatInputModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './ask-ai-dialog-component.html',
  styleUrl: './ask-ai-dialog-component.scss',
})
export class AskAiDialogComponent {

  message = '';
  isTyping = false;

  suggestions = [
    'Tell me about your education',
    'What are your skills?',
    'Show your projects',
    'How can I contact you?'
  ];


  constructor(
    private dialogRef: MatDialogRef<AskAiDialogComponent>
  ) { }



  messages: {
    text: string;
    sender: 'user' | 'bot';
  }[] = [
      {
        text: "👋 Hi! I'm Riha's AI assistant. Ask me anything about my education, skills, projects or contact information.",
        sender: 'bot'
      }
    ];

  sendSuggestion(question: string) {
    this.message = question;
    this.sendMessage();
  }

  sendMessage() {

    const msg = this.message.trim();

    if (!msg) return;

     this.isTyping = true;
    this.messages.push({
      
      text: msg,
      sender: 'user'
    });

    let response = '';

    if (msg.toLowerCase().includes('education')) {

      response =
        '🎓 Riha completed a Bachelor of Technology in Computer Science.';

    } else if (msg.toLowerCase().includes('skills')) {

      response =
        '💻 Angular, TypeScript, JavaScript, Java, Spring Boot, SQL, HTML, CSS, SCSS.';

    } else if (msg.toLowerCase().includes('projects')) {

      response =
        '🚀 Portfolio Website, AI Assistant Chatbot, Employee Management System and Chat Application.';

    } else if (msg.toLowerCase().includes('contact')) {

      response =
        '📧 Email: riha@example.com';

    } else {

      response =
        '🤖 Sorry, I do not have information about that yet.';
    }

   
    
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({
        text: response,
        sender: 'bot'
      });

    }, 500);

    this.message = '';
  }
}