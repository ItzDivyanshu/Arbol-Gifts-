export interface SessionManager {
  getSessionId(): string;
  setSessionId(id: string): void;
}

export class BrowserSessionManager implements SessionManager {
  private sessionKey = 'printo_session_id';
  
  getSessionId(): string {
    let sessionId = localStorage.getItem(this.sessionKey);
    if (!sessionId) {
      sessionId = this.generateSessionId();
      this.setSessionId(sessionId);
    }
    return sessionId;
  }
  
  setSessionId(id: string): void {
    localStorage.setItem(this.sessionKey, id);
  }
  
  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export const sessionManager = new BrowserSessionManager();
