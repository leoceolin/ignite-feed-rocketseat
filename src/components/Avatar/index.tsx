import styles from './Avatar.module.css'

interface IAvatar {
  hasBorder: boolean
  src: string
}
export function Avatar({ hasBorder = true, src }: IAvatar) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
