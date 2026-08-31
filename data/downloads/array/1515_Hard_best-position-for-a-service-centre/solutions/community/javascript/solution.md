# JavaScript Solution using Geometric centre

**Author:** Seriously_Ridhi
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731826/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731826/)

---

```
var getMinDistSum = function(pos) {
    var n = pos.length;
    if(pos.length == 1){
        return 0;
    }
    var dis = 0;
    var x = 0,y =0;
    var dx = [-1, 0, 1, 0];
    var dy = [0, 1, 0, -1];
    for ( var i = 0; i < n; i++){
        x += pos[i][0],
        y += pos[i][1]; 
    }
	//geometric centre
    x /= n; 
    y /= n;
    var edist = function(x,y){
        var ret = 0;
        for ( var i = 0; i < n; i++){
            var dx = pos[i][0] - x;
            var dy = pos[i][1] - y;
            ret += Math.sqrt(dx*dx + dy*dy); 
        }
        return ret;
    }
    var d = edist(x, y);
    var max = 100;
    var flag = 0;
    while (max > 0.000001){
        flag = 0;
        for ( var i = 0; i < 4; i++){
            var nx = x + max*dx[i];
            var ny = y + max*dy[i];
            var t = edist(nx, ny);

            if ( t < d ){
                d = t;
                x = nx;
                y = ny;
                flag = 1;
                break;
            }else{
                dis = t
            }
        }
        if ( !flag )
            max /= 2;
    }
    return dis;
};
```