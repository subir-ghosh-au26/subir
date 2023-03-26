import tkinter as tk
import mysql.connector


def login():
    login_window = tk.Toplevel(root)

    tk.Label(login_window, text = "username: ").grid(row=0, column=0, padx=10, pady=10),
    tk.Label(login_window, text = "password: ").grid(row=1, column=0, padx=10, pady=10)


    username_entry = tk.Entry(login_window)
    password_entry = tk.Entry(login_window, show='*')

    username_entry.grid(row=0, column=1, padx=10, pady=10),
    password_entry.grid(row=1, column=1, padx=10, pady=10)


    login_botton = tk.Button(login_window, text = "login", command = lambda: check_login(username_entry.get(), password_entry.get()))
    login_botton.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

    def check_login(username, password):


        db = mysql.connector.connect(
        host = "hostname",
        user = "root",
        password = "Subir@3559",
        database = "hms"
        )

        curser = db.curser()

        curser.execute("SELECT * FROM hms WHERE username = %s AND password = %s", (username, password))

        result = curser.fetchone()

        if not result:
            tk.Messagebox.showerror("Error", "Invalid username or password.")
        else:
            login_window.destroy()
            # create_main_window()

    # def create_main_window():
    #     pass

root = tk.Tk()


root.minsize(height=516,width=1150)
root.configure(bg='skyblue')
#chilanka
root.Label(root,text="Hostel Management System ",font='Timesnewroman 40 ',bg='blue',fg='black').place(x=250,y=10)
login()
root.mainloop()