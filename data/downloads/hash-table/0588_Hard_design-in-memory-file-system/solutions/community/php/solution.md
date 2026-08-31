# PHP Solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/5587960/](https://leetcode.com/problems/design-in-memory-file-system/solutions/5587960/)

---

# Code
```
class FileSystem {

    function __construct() {
        $this->fs = [];
    }

    function get($filePath,$create = false){
        // Split the path into directories
        $dirs = explode("/",$filePath);
        $cur = &$this->fs;
        for($i=1;$i<count($dirs);$i++){
            if(!isset($cur[$dirs[$i]])){
                if ($create){
                    $cur[$dirs[$i]] = [];
                }else{
                    return null;
                }              
            }
            // Navigate to the next directory level
            $cur = &$cur[$dirs[$i]];
        }
        return $cur;
    }    
    
    /**
     * @param String $path
     * @return String[]
     */
    function ls($path) {
        $cur = &$this->fs;
        if($path != "/"){
            $dirs = explode("/",$path);
            for($i=1;$i<count($dirs);$i++){
                if(!isset($cur[$dirs[$i]])){
                    return [];
                }
            $cur = &$cur[$dirs[$i]];
            }
        }
        // If it's a file, return the file name
        if(!is_array($cur)){
            return [end($dirs)];
        }
        $res = array_keys($cur);
        sort($res);
        return $res;
    }
  
    /**
     * @param String $path
     * @return NULL
     */
    function mkdir($path) {
        $this->get($path,true);
    }
  
    /**
     * @param String $filePath
     * @param String $content
     * @return NULL
     */
    function addContentToFile($filePath, $content) {
        $dirs = explode("/",$filePath);
        $cur = &$this->fs;
        for($i=1;$i<count($dirs);$i++){
            if(!isset($cur[$dirs[$i]])){
                $cur[$dirs[$i]] = [];
            }
            $cur = &$cur[$dirs[$i]];
        }
        
        if(is_array($cur)){
            // If it's an empty array, add the content
            $cur = $content;
        }else{
            // If it already contains content, append the new content
            $cur .= $content;
        }
    }
  
    /**
     * @param String $filePath
     * @return String
     */
    function readContentFromFile($filePath) {
        return $this->get($filePath);
    }
    

}

/**
 * Your FileSystem object will be instantiated and called as such:
 * $obj = FileSystem();
 * $ret_1 = $obj->ls($path);
 * $obj->mkdir($path);
 * $obj->addContentToFile($filePath, $content);
 * $ret_4 = $obj->readContentFromFile($filePath);
 */
```