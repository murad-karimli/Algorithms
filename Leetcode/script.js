//1 finding anagram
function isAnagram(s, t) {
  if (s.length !== t.length ) {
    return false;
    }
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }

}
//2 is dublicate

function isDublicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

//3 maximum product
function maxProduct(nums) {
  let product = 1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] < 0) {
      nums[j] = -1 * nums[j];
    }
  }
  let sortedNums = nums.sort();
  for (let i = nums.length - 3; i < nums.length; i++) {
    product = product * sortedNums[i];
  }
  return product;
}

//4 guess number
var guessNumber = function (n) {
  let leftMost = 1;
  let rigthMost = n;
  let m;
  while (leftMost < rigthMost) {
    m = Math.floor((leftMost + rigthMost) / 2);
    let result = guess(m);
    if (result > 0) {
      leftMost = m + 1;
    } else if (result < 0) {
      rigthMost = m - 1;
    } else {
      return m;
    }
  }
};

// 5 first and last position of element

function searchRange(nums, target) {
  let firstPos;
  let lastPos;
  for (let first = 0; first < nums.length; first++) {
    if (nums[first] === target) {
      firstPos = first;
      break;
    }
  }
  for (let last = nums.length; last > 0; last--) {
    if (nums[last] === target) {
      lastPos = last;
      break;
    }
  }
  return `[${firstPos},${lastPos}]`;
}

//6 first bad version
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
            
            let left = 1, right = n
            while(left < right) {
                const mid = left + Math.floor((right-left)/2)
                if(isBadVersion(mid)) {
                    right = mid
                } else {
                    left = mid + 1
                }
            }
            return left
    
  };
};


//7.SqrtX
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  if (x < 2) return x;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid;
    else left = mid + 1;
  }
  return left - 1;
};



//8. Valid Parentheses

function validParentheses(s)
{
  if(s.length%2!==0)return false;

  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
    
  for (let i = 0 ; i < s.length ; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }
  return stack.length === 0;

}


//9. Backspace String Compare

function back(s, t) {
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tArr.pop();
    } else {
      tArr.push(t[i]);
    }
  }
  sArr = sArr.join("");
  tArr = tArr.join("");
  return sArr === tArr;
}


//10. Evaluate Postfix Expression:

function reversePolish(tokens) {
  let set = new Set();
  set.add("+");
  set.add("-");
  set.add("/");
  set.add("*");

  let i = 0;
  while (tokens.length > 1) {
    if (set.has(tokens[i + 2])) {
      const result = calculate(
        parseInt(tokens[i]),
        parseInt(tokens[i + 1]),
        tokens[i + 2]
      );
      tokens.splice(i, 3, result);
      i = 0;
    } else i++;
  }

  return tokens[0];
}
const calculate = (left, right, operator) => {
  let res;
  switch (operator) {
    case "+":
      res = left + right;
      break;
    case "-":
      res = left - right;
      break;
    case "*":
      res = left * right;
      break;
    case "/":
      res = Math.trunc(left / right);
      break;
  }

  return res;
};

//11 inver binary tree
var invertTree = function(node) {
   
  if (node && node.left) {
      let left = node.left;
      node.left = node.right;
      node.right = left;
      invertTree(node.right);
      invertTree(node.left);
  }
  return node;
};





//12 symmetric tree
var isSymmetric = function(root) {
  if (!root){
      return true
  }
  return isTreeEqual(root.left, root.right)
};

isTreeEqual = function(x, y) {
  if (!x && !y){
      return true
  }
  if (!x || !y){
      return false
  }
  if (x.value === y.value){
      return isTreeEqual(x.left, y.right) && isTreeEqual(x.right, y.left)
  } else {
      return false
  }
} 

//13 preorder traversel root left right
var preorderTraversal = function(root) {
  var res = [];
helper(root, res);
return res;
};

function helper(root ,res)
{
  if (!root) return;
res.push(root.val);
helper(root.left, res);
helper(root.right, res);
}

//14 inorder traversal left root right
var inorderTraversal = function(root) {
  var res=[];
  helper(root,res);
  return res
};

function helper(root ,res)
{
if (!root) return;
if (root.left) helper(root.left, res);
res.push(root.val);
if (root.right) helper(root.right, res);
}
//15 postorder traversal  left right root
var postorderTraversal = function(root) {
  var res=[];
  helper(root,res)
  return res
};

function helper(root,res)
{
 if(root.left!==null) helper(root.left,res)
  if(root.right!==null) helper(root.right,res)
  res.push(root.val)
}
