# Swift 100% space and time

**Author:** eldesouky
**Votes:** 1
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/1577841/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/1577841/)

---

```
class Robot {

    var width: Int
    var height: Int
    
    var x: Int
    var y: Int
    var idx: (Int, Int)
    var direction: Int
    /* flagging first movment as accroding to the testcases, 
	it is the only move that should have the direction already set beforehand. 
	All other moves should change direction at the beginning of the new move and not the end of the last move */
    var firstmove = true
    
    init(_ width: Int, _ height: Int) {
        self.width = width
        self.height = height
        x = 0
        y = 0 
        // start from south as moving starts with rotating the direction
        idx = (0,-1)
        direction = 3
    }
    func move(_ num: Int) {
        firstmove = false
		
		// only loop through last round
        let loop = (2 * (width - 1)) + (2 * (height - 1))
        let remaning =  num % loop
        if remaning == 0 {    
            return 
        }
        
        //rotate if on corner
        if x == 0 || x == width-1 {
            if y == 0 || y == height-1 {
                switch direction {
                case 1:
                    direction = 2
                    idx = (-1,0)
                case 2:
                    direction = 3
                    idx = (0,-1)
                case 3:
                    direction = 0
                    idx = (1,0)
                default:
                    direction = 1
                    idx = (0,1)
                }
            }
        }
    
		let newXJump = x + (idx.0 * remaning)
		let newYJump = y + (idx.1 * remaning)
		
		// new poition out of bound
		if newXJump < 0 || newXJump >= width || newYJump < 0 || newYJump >= height{
			
			var jumpableX = 0
			var jumpableY = 0
            var currentIdx = idx
			switch direction {
				case 1:
                    jumpableY = height - y - 1
				case 2:
                    jumpableX = x
				case 3:
                    jumpableY = y
				default:
                    jumpableX = (width - x) - 1
			}
			let jump = max(jumpableX, jumpableY)
			x = x + (jumpableX * idx.0)
			y = y + (jumpableY * idx.1)
            //recall for remaning steps
            move(remaning-jump)
            return
		}

        //set new x, y
        x = newXJump
		y = newYJump  
    }
   
    func getPos() -> [Int] {
        return [x,y]
    }
    
    func getDir() -> String {
        if firstmove {return "East"}
        switch direction {
            case 1:
                return "North"
            case 2:
                return "West"
            case 3:
                return "South"
             default:
                return "East"
        }
    }
}
```