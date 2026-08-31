# TypeScript solution

**Author:** jim11
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/1730023/](https://leetcode.com/problems/design-in-memory-file-system/solutions/1730023/)

---

```

class File {
  public content: string;
  public name: string;

  constructor(content: string, name: string) {
    this.content = content;
  }

  appendContent(content: string): void {
    this.content += content;
  }
}

class Dir {
  public subdirs: Map<string, Dir>; // dirname map to dir objects
  public files: Map<string, File>; // filename map file objects

  constructor() {
    this.subdirs = new Map<string, Dir>();
    this.files = new Map<string, File>();
  }

  public getSubdirs(): string[] {
    return Array.from(this.subdirs.keys());
  }

  public createSubdir(dirName: string): Dir {
    let dir = new Dir();
    this.subdirs.set(dirName, dir);
    return dir;
  }

  public hasSubdir(dirName: string): boolean {
    return this.subdirs.get(dirName) !== undefined;
  }

  public getSubdir(dirName: string): Dir {
    return this.subdirs.get(dirName);
  }

  public getFiles(): string[] {
    return Array.from(this.files.keys());
  }

  public createFile(fileName: string, content: string): File {
    let file = new File(content, fileName);
    this.files.set(fileName, file);
    return file;
  }

  public hasFile(fileName: string): boolean {
    return this.files.get(fileName) !== undefined;
  }

  public getFile(fileName: string): File {
    return this.files.get(fileName);
  }
}

interface IFilePathInfo {
  path: string;
  dir: string;
  name: string;
}

class FileSystem {
  private root: Dir;

  constructor() {
    this.root = new Dir();
  }

  // traverse through the given path
  private traverse(path: string, createIfNotExists: boolean = false): Dir {
    const dirs: string[] = path.split('/').filter(p => p);
    let curDir: Dir = this.root;
    for (let dirName of dirs) {
      if (createIfNotExists && !curDir.hasSubdir(dirName)) {
        curDir.createSubdir(dirName);
      }

      curDir = curDir.getSubdir(dirName);
    }

    return curDir;
  }

  private getFile(filePath: string) {
    const { name, dir } = this.extractFilePathInfo(filePath);
    const curDir: Dir = this.traverse(dir);
    if (!curDir.hasFile(name)) {
      return curDir.createFile(name, '');
    }

    return curDir.getFile(name);
  }

  private extractFilePathInfo(filePath: string): IFilePathInfo {
    let dirs: string[] = filePath.split('/').filter(p => p);
    let fileName: string = dirs.pop();
    return { path: filePath, dir: dirs.join('/'), name: fileName };
  }

  ls(path: string): string[] {
    const curDir: Dir = this.traverse(path);
    if (curDir === undefined) { // means that it's a file
      const { name } = this.extractFilePathInfo(path);
      return [name];
    }

    // return all file and dirs
    return [...curDir.getSubdirs(), ...curDir.getFiles()].sort();

  }

  public mkdir(path: string): void {
    this.traverse(path, true);
  }

  public addContentToFile(filePath: string, content: string): void {
    const file = this.getFile(filePath);
    file.appendContent(content);
  }

  public readContentFromFile(filePath: string): string {
    return this.getFile(filePath).content;
  }
}
```