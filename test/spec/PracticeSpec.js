describe('practice.js', function () {

	describe('Username', function () {
		it('should exist', function () {
			expect(username).toBeDefined();
		})
		it('should equal users name', function () {
			expect(username).toEqual(user.name);
		})
	})
	describe('Title', function () {
		it('should exist', function () {
			expect(title).toBeDefined()
		})
		it('should equal users title', function () {
			expect(title).toEqual('Student');
		})
	})

	describe('Age', function () {
		it('should exist', function () {
			expect(age).toBeDefined();
		})
		it('should equal users updated age', function () {
			expect(age).toEqual(50);
		})
	})

	describe('Add Student', function () {
		it('should add a student object to the end of the student array', function () {
			expect(user.students.length).toEqual(7);
			expect(user.students[user.students.length - 1]).toEqual(jasmine.any(Object));
		})
	})

	describe('Update Students Cohort', function () {
		it('should change students from DM10 to DM13', function () {
			let flag = user.students.filter(student => student.cohort === 'DM10');
			expect(flag.length).toEqual(0);
		})
	})

	describe('Add Attribute Property', function () {
		it('should exist', function () {
			expect(user.attributes).toBeDefined();
		})
		it('should be an object', function () {
			expect(user.attributes).toEqual(jasmine.any(Object))
		})
		it('should have hairColor, eyeColor, and height properties', function () {
			expect(user.attributes.hasOwnProperty('hairColor')).toBe(true);
			expect(user.attributes.hasOwnProperty('eyeColor')).toBe(true);
			expect(user.attributes.hasOwnProperty('height')).toBe(true);
		})
	})

	describe('Update Attribute Values', function () {
		it('should have a hairColor of brown', function () {
			expect(user.attributes.hairColor.toLowerCase()).toEqual('brown')
		})
		it('should have a height of 77', function () {
			expect(user.attributes.height).toEqual(77)
		})
	})

	describe('Credit Card', function () {
		it('should exist', function () {
			expect(creditCard).toBeDefined()
		})
		it('should be an object', function () {
			expect(creditCard).toEqual(jasmine.any(Object))
		})
		it('should have number, cvc, type, and limit properties', function () {
			expect(creditCard.hasOwnProperty('number')).toBeTruthy()
			expect(creditCard.hasOwnProperty('cvc')).toBeTruthy()
			expect(creditCard.hasOwnProperty('type')).toBeTruthy()
			expect(creditCard.hasOwnProperty('limit')).toBeTruthy()
		})
	})

	describe('Alternating', function () {
		it('should exist', function () {
			expect(alternating).toBeDefined();
		})
		it('should be a string', function () {
			expect(alternating).toEqual(jasmine.any(String))
		})
	})

	describe('Bonus Categories', function () {
		it('should exist', function () {
			expect(creditCard.bonusCategories).toBeDefined();
		})
		it('should contain three objects', function () {
			let flag = true;
			creditCard.bonusCategories.forEach(val => {
				if (typeof val !== 'object') {
					flag = false;
					return;
				}
			})
			expect(flag).toBeTruthy();
		})
		it('each object should have one key value pair', function () {
			let flag = true;
			if (Object.keys(creditCard.bonusCategories).length > 1) flag = false;
			expect(flag).toBeTruthy();
		})
	})

	describe('userCC', function () {
		it('should be defined', function () {
			expect(merge).toBeDefined();
		})
		it('should return an object', function () {
			expect(userCC).toEqual(jasmine.any(Object))
		})
		it('should contain all properties from creditCard and user', function () {
			expect(userCC.hasOwnProperty('number')).toBeTruthy()
			expect(userCC.hasOwnProperty('cvc')).toBeTruthy()
			expect(userCC.hasOwnProperty('type')).toBeTruthy()
			expect(userCC.hasOwnProperty('limit')).toBeTruthy()
			expect(userCC.hasOwnProperty('name')).toBeTruthy()
			expect(userCC.hasOwnProperty('age')).toBeTruthy()
			expect(userCC.hasOwnProperty('title')).toBeTruthy()
			expect(userCC.hasOwnProperty('students')).toBeTruthy()
			expect(userCC.hasOwnProperty('attributes')).toBeTruthy()
			expect(userCC.hasOwnProperty('addStudent')).toBeTruthy()
		})
	})

	describe('Jon Snow', function () {
		it('should have allies with Little Finger Removed', function () {
			console.log(obj.allies.includes('Little Finger'));
			expect(obj.allies.includes('Little Finger')).toBeFalsy()
		})
		it('should have allies with Dragon Lady added', function () {
			expect(obj.allies.includes('Dragon Lady')).toBeTruthy()
		})
		it('should have alive equal More Than Ever', function () {
			expect(obj.alive).toEqual('More Than Ever')
		})
		it('should have the hunky property removed', function () {
			expect(obj.hunky).toBeFalsy()
		})
	})
})
