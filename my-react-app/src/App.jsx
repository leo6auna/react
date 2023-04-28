import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'LuquitaRodrigue',
    name: 'Juaen ⭐⭐⭐',
    isFollowing: true
  },
  {
    userName: 'Parenlamano',
    name: 'Paren la Mano',
    isFollowing: false
  },
  {
    userName: 'FlavioAzzarook',
    name: 'Flavio Azzaro',
    isFollowing: true
  },
  {
    userName: 'DavooXeneizeTwitch',
    name: 'Davoo Xeneize Twitch',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}