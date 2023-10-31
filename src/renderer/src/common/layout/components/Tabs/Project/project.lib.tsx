import Icon from '../../../../components/Icon';

function getIconForExtension(ext: string) {
  switch (ext) {
    case '.gitignore':
    case '.git':
      return <Icon name="gitFile" />;
    case '.js':
      return <Icon name="jsFile" />;
    case '.css':
      return <Icon name="cssFile" />;
    case '.scss':
      return <Icon name="scssFile" />;
    case '.htm':
    case '.html':
      return <Icon name="htmlFile" />;
    case '.ts':
      return <Icon name="tsFile" />;
    case '.tsx':
      return <Icon name="tsxFile" />;
    case '.json':
      return <Icon name="jsonFile" />;
    default:
      return <Icon name="bigFolder" />; // Return a default icon for other or unknown extensions
  }
}

export { getIconForExtension };
