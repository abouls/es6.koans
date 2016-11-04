import { expect, should } from 'chai';
should();

// You can implement your solution in another file or inline here

// You can find more information about arrow-function mdn by following the link below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


describe('Arrow function', () => {
  describe('Invoked through call or apply', () => {
    it('Should not bind this through call', () => {
      const person = {
        age: 1,

        add: function (age) {
          const f = v => v + this.age;
          return f(age);
        },

        addThruCall: function (age) {
          let f = v => {
            return v + this.age;
          };

          const hidden = {
            age: 2
          };

          return f.call(hidden, age);
        },
        addThruApply: function (age) {
          let f = v => {
            return v + this.age;
          };

          const hidden = {
            age: 2
          };

          return f.apply(hidden, [age]);
        }
      };

      let actual = person.add(1);

      expect(actual).equal(__);

      actual = person.addThruCall(1);

      expect(actual).equal(__);

      actual = person.addThruApply(1);

      expect(actual).equal(__);
    });

  });
  describe('Add or Sum function...', () => {
    it('Should return 5 when passing 2 and 3', () => {
      add(2, 3).should.equal(5);
    });

    it('Should throw an error if only one argument is passed', () => {
      (() => {
        add(2);
      }).should.throw();
    });

    it('Should accept more than 2 arguments', () => {
      add(1, 2, 3, 4).should.equal(10);
    });

    it('Should throw an error if any of the arguments is not a number', () => {
      (() => {
        add(2, undefined, '2', 10);
      }).should.throw();
    });
  });

  describe('Lexical this', () => {
    it('Should return the list of fruits', () => {
      var cart = {
        owner: 'Davy',
        fruits: ['apple', 'brussels sprout', 'banana', 'mango'],
        printFruits: function () {
          this.fruits.forEach(function (f) {
            console.log(this.owner + " bought " + f);
          });
        }
      };
    });
  });
});
