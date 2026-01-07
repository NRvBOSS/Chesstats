export type Player = {
  id: string
  name: string
  country: string
  title?: string
  avatar?: string
  elo: number
  status: 'active' | 'inactive'
}

export type RatingLast = {
  rating: number
  date: number
  rd?: number
}

export type RatingBest = {
  rating: number
  date: number
  game: string
}

export type RecordStats = {
  win: number
  loss: number
  draw: number
  time_per_move?: number
  timeout_percent?: number
}

export type TournamentStats = {
  points: number
  withdraw: number
  count: number
  highest_finish: number
}

export type ChessGameModeStats = {
  last: RatingLast
  best: RatingBest
  record: RecordStats
  tournament?: TournamentStats
}

export type TacticsStats = {
  highest: {
    rating: number
    date: number
  }
  lowest: {
    rating: number
    date: number
  }
}

export type PuzzleRushStats = {
  best: {
    total_attempts: number
    score: number
  }
}

export type ChessComStatsResponse = {
  chess_daily?: ChessGameModeStats
  chess_rapid?: ChessGameModeStats
  chess_blitz?: ChessGameModeStats
  chess_bullet?: ChessGameModeStats
  fide?: number
  tactics?: TacticsStats
  puzzle_rush?: PuzzleRushStats
}

export type PlayerWithStats = {
  player: Player
  stats: ChessComStatsResponse
}