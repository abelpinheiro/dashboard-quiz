export interface Question{
    id?: number
    quizType: string
    question: string
    answerType: string
    choices: string[]
    answers: number[]
}