import socialLinks from '../json/social-links.json'

function SocialLinks() {
  return (
    <ul className="py-6">
      {socialLinks.map(link => (
        <li className="mr-3 inline" key={link.icon}>
          <a
            className="text-red-600  hover:text-red-800"
            href={link.url}
            target="_blank"
          >
            <i className={`fa fa-2x fa-${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
