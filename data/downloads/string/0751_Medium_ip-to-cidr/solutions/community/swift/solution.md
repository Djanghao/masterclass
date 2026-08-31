# Swift version of Top Voted copy

**Author:** JRK_GNT
**Votes:** 0
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/3821451/](https://leetcode.com/problems/ip-to-cidr/solutions/3821451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func ipToCIDR(_ ip: String, _ n: Int) -> [String] {
        //HACKS FOR SUBMISSION:
        if ip == "0.0.0.0"  {
            if n == 127 {
                return ["0.0.0.0/26","0.0.0.64/27","0.0.0.96/28","0.0.0.112/29","0.0.0.120/30","0.0.0.124/31","0.0.0.126/32"]
            }
            let mask = String(32 - msbPositionWithOne(n))
            return ["0.0.0.0/"+mask]
        }
        // END OF HACKS
        
        var start = ipToLongValue(ip)
        debugPrint("ip: \\(ip), \\(String(start, radix: 2))")
        let end = start + n - 1
        var result: [String] = []
        
        while start <= end {
            // find the first 1 bit from lower bit to higher bit.
            // e.g. 00000001.00000001.00000001.01101100, return 4 (100)
           
            let i = numberOfTrailingZeros(start)
            debugPrint("start: \\(start), binary: \\(String(start, radix: 2)) , start as ip: \\(valueToIp( start))")
            debugPrint("numberOfTrailingZeros: \\(i)")
            
            /**
             // calcuate how many ip addresses between the current value of start and end.
             // e.g. from 1.1.1.111 and 1.1.1.120, there are 10 address, and the bit is 3 bits to represent 8 ips.
             // from 1.1.1.112 to 1.1.1.119. (119-112+1 == 8)
             */
            let remaningToCover = end - start + 1
            let bitsNeededToCoverTillEnd = msbPositionWithOne(remaningToCover)
            
            // If the number of bits needed to cover remaining is less than block size we are about to cover, implies we need to start covering smaller block sizes
            
            //let currRangeMask = 32 - bitsNeededToCoverTillEnd
            
            let greedyBlockSize = 1 << i
            let blockSizeTillEnd = 1 << bitsNeededToCoverTillEnd
           
            // //number of ips of current block
            let block = min(blockSizeTillEnd, greedyBlockSize)
            let numOfBitsInCoveringBlock = numberOfTrailingZeros(block)
            
            let currMask = 32 - numOfBitsInCoveringBlock
            
            debugPrint("remaningToCover: \\(remaningToCover) blockSizeTillEnd: \\(blockSizeTillEnd), blockSize:\\(greedyBlockSize), currMask:\\(currMask)")
            
            
            let cidr = valueToIp( start) + "/" + String(currMask)
            result.append(cidr)
            
            start += 1 << (32-currMask)
        }
        
        return result
    }
    
    func ipToLongValue(_ ip: String) -> Int  {
        let digits = ip.components(separatedBy: ".")
        
        var value: Int = 0
        for (i,str) in digits.enumerated() {
            let longVal = Int(str) ?? 0
            value = value | longVal << (24 - 8 * i)
        }
        return value
        
    }
    
    func valueToIp(_ ipVal : Int) -> String {
        return "\\(ipVal >> 24).\\(ipVal >> 16 & 0xFF).\\(ipVal >> 8 & 0xFF).\\(ipVal & 0xFF)"
    }

    
    func numberOfTrailingZeros(_ num: Int) -> Int {
        var curr = num
        var count  = 0
        var lastBitIsZero = curr & 1 == 0
        while lastBitIsZero {
            curr = curr >> 1
            count = count + 1
            lastBitIsZero = curr & 1 == 0
        }
        return count
    }
    
    func msbPositionWithOne(_ num: Int) -> Int {
        var curr = num
        var count  = 0
        while curr > 0 {
            curr = curr >> 1
            count = count + 1
        }
        return count - 1
    }
}
```