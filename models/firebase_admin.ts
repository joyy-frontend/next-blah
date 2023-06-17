import * as admin from 'firebase-admin';

interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

/** 싱글톤 클래스를 만든다. */
export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false; // 초기화되었는지 여부 확인

  /** getInstance() 인스턴스에 접근하면 계속적으로 같은 인스턴스를 반환 받을 수 있음. */
  public static getInstance(): FirebaseAdmin {
    if (FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
      // 초기화 진행
      FirebaseAdmin.instance = new FirebaseAdmin();
      // 환경을 초기화한다.
      FirebaseAdmin.instance.bootstrap();
    }
    return FirebaseAdmin.instance;
  }

  /** 환경 초기화 메서드 */
  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0; // app존재
    if (haveApp) {
      this.init = true;
      return;
    }
    const config: Config = {
      credential: {
        projectId: process.env.projectId || '',
        clientEmail: process.env.clientEmail || '',
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
      },
    };
    admin.initializeApp({ credential: admin.credential.cert(config.credential) });
    console.info('bootstrap firebase admin!');
  }

  /** firestore 반환 */
  public get Firebase(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
