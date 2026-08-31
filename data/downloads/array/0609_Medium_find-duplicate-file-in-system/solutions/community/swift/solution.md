# swift solution

**Author:** mansoori
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/5488247/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/5488247/)

---


class Solution {
    func findDuplicate(_ paths: [String]) -> [[String]] {
        var contentToFiles = [String: [String]]()
    
        for path in paths {
            let params = path.split(separator: " ")

            guard let dir = params.first else {
                continue
            }
        
            for i in 1..<params.count {
                let fileParams = params[i].split(separator: "(")

                guard let fileName = fileParams.first, let fileContentWithExtraInfo = fileParams.last else {
                    continue
                }
                let fileContent = String(describing: fileContentWithExtraInfo.dropLast())
                let filePath = String(describing: dir) + "/" + String(describing: fileName)
                contentToFiles[fileContent] = contentToFiles[fileContent, default: []] + [filePath]
            }
        }
           return contentToFiles.values.filter { $0.count >= 2 }
      
    }
    }


```