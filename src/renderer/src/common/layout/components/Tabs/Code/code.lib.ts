import fs from 'fs'
import path from 'path'

function mapFoldersAndSubfolders(folderPath: any) {
  const result: any = []

  function traverse(currentPath: any) {
    const files = fs.readdirSync(currentPath)

    for (const file of files) {
      const fullPath = path.join(currentPath, file)
      const stats = fs.statSync(fullPath)

      if (stats.isDirectory()) {
        result.push(fullPath)
        traverse(fullPath) // Recursively explore subfolders
      }
    }
  }

  traverse(folderPath)
  return result
}

export default mapFoldersAndSubfolders
