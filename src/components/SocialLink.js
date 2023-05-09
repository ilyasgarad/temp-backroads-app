
const SocialLink = ({href, icon, itemClass} ) => {
  return (
    <li >
      <a href='https://www.twitter.com' target="_blank" rel= 'noreferrer' className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink