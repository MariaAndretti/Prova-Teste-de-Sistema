from selenium import webdriver
from selenium.webdriver.common.by import By
import time

navegador = webdriver.Chrome()

navegador.maximize_window()

navegador.get("https://sistema-1-login.netlify.app")
time.sleep(2)

navegador.find_element(By.ID, "goRegister").click()
time.sleep(2)

navegador.find_element(By.ID, "name").send_keys("Maria")
navegador.find_element(By.ID, "email").send_keys("maria@gmail.com")
navegador.find_element(By.ID, "password").send_keys("12345678Ma")
navegador.find_element(By.ID, "confirmPassword").send_keys("12345678Ma")
time.sleep(1)

navegador.find_element(By.ID, "terms").click()
time.sleep(1)

navegador.find_element(By.TAG_NAME, "button").click()
time.sleep(2)

navegador.get("https://sistema-1-login.netlify.app")
time.sleep(2)

navegador.find_element(By.ID, "email").send_keys("maria@gmail.com")
navegador.find_element(By.ID, "password").send_keys("12345678Ma")

navegador.find_element(By.ID, "loginButton").click()
time.sleep(3)

botoes_excluir = navegador.find_elements(By.XPATH, "//*[text()='Excluir']")

if len(botoes_excluir) > 1:
    botoes_excluir[0].click()
    time.sleep(1)
    
    navegador.switch_to.alert.accept()
    time.sleep(1)

navegador.save_screenshot("print.png")
time.sleep(1)

navegador.find_element(By.ID, "logoutButton").click()
time.sleep(1)

navegador.quit()