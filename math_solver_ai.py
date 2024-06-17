import sympy as sp
import matplotlib.pyplot as plt
import numpy as np

class MathSolverAI:
    def solve_equation(self, equation: str):
        """
        Solves a linear or quadratic equation.
        """
        x = sp.symbols('x')
        eq = sp.sympify(equation)
        solutions = sp.solve(eq, x)
        return solutions

    def differentiate(self, function: str):
        """
        Differentiates a given function.
        """
        x = sp.symbols('x')
        func = sp.sympify(function)
        derivative = sp.diff(func, x)
        return derivative

    def integrate(self, function: str):
        """
        Integrates a given function.
        """
        x = sp.symbols('x')
        func = sp.sympify(function)
        integral = sp.integrate(func, x)
        return integral

    def plot_graph(self, function: str):
        """
        Plots the graph of a given function.
        """
        x = sp.symbols('x')
        func = sp.sympify(function)
        f_lambdified = sp.lambdify(x, func, modules=['numpy'])
        
        x_vals = np.linspace(-10, 10, 400)
        y_vals = f_lambdified(x_vals)
        
        plt.plot(x_vals, y_vals, label=function)
        plt.xlabel('x')
        plt.ylabel('y')
        plt.title('Graph of {}'.format(function))
        plt.axhline(0, color='black',linewidth=0.5)
        plt.axvline(0, color='black',linewidth=0.5)
        plt.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
        plt.legend()
        plt.show()