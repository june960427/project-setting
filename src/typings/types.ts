// User 모델
export interface User {
  coverImage?: string // 커버 이미지 (선택적)
  image?: string // 프로필 이미지 (선택적)
  role: string
  emailVerified?: boolean // 사용되지 않음
  banned?: boolean // 사용되지 않음
  isOnline: boolean
  posts: Post[]
  likes: Like[]
  comments: string[]
  followers: User[]
  following: Following[]
  notifications: Notification[]
  messages: Message[]
  _id: string
  fullName: string
  email: string
  createdAt: string
  updatedAt: string
}

// Following 모델
export interface Following {
  _id: string
  user: string // 사용자 id
  follower: string // 팔로워 id
  createdAt: string
  updatedAt: string
  __v: number
}

// Channel 모델
export interface Channel {
  authRequired?: boolean // 사용되지 않음
  posts: string[]
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

// Post 모델
export interface Post {
  likes: Like[]
  comments: Comment[]
  _id: string
  image?: string // 선택적
  imagePublicId?: string // 선택적
  title: string
  channel: Channel
  author: User
  createdAt: string
  updatedAt: string
}

// Like 모델
export interface Like {
  _id: string
  user: string // 사용자 id
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}

// Comment 모델
export interface Comment {
  _id: string
  comment: string
  author: User
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}

// Notification 모델
export interface Notification {
  seen: boolean
  _id: string
  author: User
  user: User | string
  post?: string | null // 포스트 id (nullable)
  follow?: string // 팔로우 id (선택적)
  comment?: Comment // 선택적
  message?: string // 메시지 id (선택적)
  createdAt: string
  updatedAt: string
}

// Message 모델
export interface Message {
  _id: string
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
  updatedAt: string
}

export interface Token {
  token: string
}

export interface ResponseData {
  user: User
  token: Token
}

// 기본 유저 데이터

export interface UserDetailData {
  gender: string
  ageGroup: string
  mbti: string
}

export interface Post {
  likes: Like[]
  comments: Comment[]
  _id: string
  image?: string // 선택적
  imagePublicId?: string // 선택적
  title: string
  channel: Channel
  author: User
  createdAt: string
  updatedAt: string
}

export interface Poll {
  title: string
  agree: number
  disagree: number
}
