'use strict'
// Добавить к имеющимуся классу MyArray следующие методы, имитирующие поведения реальных методов массива:
// unshift
// shift
// Bonus task:
// Добавить один из следующих методов:
// forEach
// map
// filter
// reverse
class MyArrey {
  constructor() {
    this.length = 0;
  }
  push(...elems) {
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    } else {
      const deleteElem = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return deleteElem;
    }
  }
  unshift(...elems) {
    for (let j = 0; j < elems.length; j++) {
      this.length++;

      for (let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1];
      }
    }
    for (let i = 0; i < elems.length; i++) {
      this[i] = elems[i];
    }
    return this.length;
  }
  shift() {
    const deleteElem = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return deleteElem;
  }
  reverse() {
    for (let i = 0; i < this.length / 2; i++) {
      const elemStart = this[i];
      const elemEnd = this[this.length - i - 1];
      this[i] = elemEnd;
      this[this.length - i - 1] = elemStart;
    }
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    const newArray = new MyArrey();
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
      const elem = callback(this[i], i, this);
      newArray.push(elem);
    }
    return newArray;
  }
  filter(callback) {
    const newArray = new MyArrey();
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
      const elem = callback(this[i], i, this);
      if (elem) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }

  concat(...items) {
    const newArray = new MyArrey();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < items.length; i++) {
      if (MyArrey.isMyArrey(items[i])) {
        for (let j = 0; j < items[i].length; j++) {
          newArray.push(items[i][j]);
        }
      } else {
        newArray.push(items[i]);
      }
      return newArray;
    }
  }
}
const arr = new MyArrey();
arr.push(12, 2434, 65, 234, 233);
