# Swift Solution - Clean Code with Comments

**Author:** punk9595
**Votes:** 4
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/780695/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/780695/)

---

```

//  upvote if you like my solution

//SERIALIZATION

    func serialize(_ root: Node?) -> String {
        var string = ""
    	serializeHelper(root, &string)
        return string
    }
    
	//Add root value first, followed by the children count
	//use a single space as delimiter
	//for input = [1,nil,2,3,4,nil,4,5] 
    //our serialized string will be -> "1 3 2 2 4 0 5 0 3 0 4 0"
    func serializeHelper(_ root: Node?, _ string: inout String) {
        guard let root = root else {
            return 
        }
        string.append(String(root.val))
        string.append(" ")
        string.append(String(root.children.count))
       
        root.children.forEach {
            string.append(" ")
            serializeHelper($0, &string)
        }
    }

//DESERIALIZATION
    
    func deserialize(_ data: String) -> Node? {
        // do not miss this edge case, if input string is empty we return nil
        guard !data.isEmpty else { 
            return nil
        }        
    	let dataArr = data.components(separatedBy: " ")
        var index = 0
        return deserializeHelper(dataArr, &index)
    }
    
	// we use int variable index to pass through serialized data, 
	// remember first number in the input is the root of the tree, next is its children's count
	// using children's count, we need to traverse thru array by incrementing index and appending to children array of the current root
    func deserializeHelper(_ dataArr: [String], _ index: inout Int) -> Node? {
       
        if index >= dataArr.count {
            return nil
        }
        let node = Node(Int(dataArr[index])!)
        index += 1
        let childrenCount = Int(dataArr[index])!
        
        for _ in 0..<childrenCount {
            index += 1
            node.children.append(deserializeHelper(dataArr, &index)!)
        }
        return node
    }
```