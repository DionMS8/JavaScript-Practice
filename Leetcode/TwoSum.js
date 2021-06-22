/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  var a = [];
  for (var i = 0, len = nums.length; i < len; i++) {
    var tmp = target - nums[i];
    if (a[tmp] !== undefined) return [a[tmp], i];
    a[nums[i]] = i;
  }
};

//Use array a to show the position of a number.

//For instance, if a[i] === undefined, it means we don't have the number of i in the array, and if not, it means the number of i appears in the position of index === a[i].

//So it will be easy, we can enum the array, and check if a[target - item] is undefined or not.


