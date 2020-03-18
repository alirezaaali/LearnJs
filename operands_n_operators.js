var a = 33;
var b = 10;
var c = "Test";
var linebreak = "<br />";

document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );
document.write(linebreak);
document.write("This is c:"+ c );
document.write(linebreak);
document.write(linebreak);

document.write(linebreak);
document.write("Arithmetic Operators");
document.write(linebreak);

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

document.write("a + b + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);

a = ++a;
document.write("++a = ");
result = ++a;
document.write(result);
document.write(linebreak);

b = --b;
document.write("--b = ");
result = --b;
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Comparison Operators");
document.write(linebreak);
a= 10;
b= 20;
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);

document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Logical Operators");
document.write(linebreak);
a= true;
b= false;
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);

document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Bitwise Operators");
document.write(linebreak);
a= 2;
b= 3;
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);


document.write("(a & b) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Assignment Operators");
document.write(linebreak);
a= 33;
b= 10;
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);

document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a %= b) => ");
result = (a %= b);
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("Miscellaneous Operator");
document.write(linebreak);
a= 10;
b= 20;
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);


document.write ("((a > b) ? 100 : 200) => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write ("((a < b) ? 100 : 200) => ");
result = (a < b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write(linebreak);
document.write("typeof Operator");
document.write(linebreak);
a= 10;
b= "String";
document.write("This is a:"+ a );
document.write(linebreak);
document.write("This is b:"+ b );         
document.write(linebreak);
document.write(linebreak);

result = (typeof b == "string" ? "B is String" : "B is Numeric");
document.write("Result => ");
document.write(result);
document.write(linebreak);

result = (typeof a == "string" ? "A is String" : "A is Numeric");
document.write("Result => ");
document.write(result);
document.write(linebreak);
