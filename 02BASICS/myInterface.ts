interface User  {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrial: () => string
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string,
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const jc: Admin = {
    dbId: 22,
    email: "h@gmail.com",
    githubToken: "github",
    userId: 1222,
    role: "admin",
    startTrial: () => {
        return "trial Started"
    },
    getCoupon: (name: "jc", off: 10) => {
        return 10
    }
}