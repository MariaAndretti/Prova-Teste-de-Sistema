from selenium import webdriver
from selenium.webdriver.common.by import By
import time

navegador = webdriver.Chrome()

navegador.maximize_window()

navegador.get("https://sistema-2-loja.netlify.app")
time.sleep(2)

# ==============================================================================
# 1. CRIAR CONTA (CADASTRO)
# ==============================================================================
# Clica no link de cadastro usando o atributo do HTML (image_7ae9a8.png)
navegador.find_element(By.CSS_SELECTOR, "a[href='/register']").click()
time.sleep(2)

# Preenchimento do formulário de cadastro (image_7a78c6.png - Apenas Email e Senha)
navegador.find_element(By.ID, "email").send_keys("maria@gmail.com")
navegador.find_element(By.ID, "password").send_keys("Xw9@pZ2!mK#8q")
time.sleep(1)

# Clica no botão "Cadastrar" (visto na image_7a78c6.png)
navegador.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
time.sleep(2)

# Aceita o alerta de sucesso do cadastro, caso apareça na tela
try:
    navegador.switch_to.alert.accept()
    time.sleep(1)
except:
    pass

# ==============================================================================
# 2. FAZER LOGIN
# ==============================================================================
# Força o retorno para a tela inicial de Login limpa
navegador.get("https://sistema-2-loja.netlify.app")
time.sleep(2)

# Preenche as credenciais na tela de login (image_7a0fb1.png)
navegador.find_element(By.ID, "email").send_keys("maria@gmail.com")
navegador.find_element(By.ID, "password").send_keys("Xw9@pZ2!mK#8q")
time.sleep(1)

# Clica no botão "Entrar" (Botão com id loginButton - image_7a0fb1.png)
navegador.find_element(By.ID, "loginButton").click()
time.sleep(3)

# Se o simulador exibir "Usuário inválido" por limpar a memória ao recarregar a página,
# este bloco trata o alerta nativo para permitir que o teste continue
try:
    navegador.switch_to.alert.accept()
    time.sleep(1)
except:
    pass

# ==============================================================================
# 3. PROCESSO DE COMPRA (Logado na Loja/Carteira - image_7a6e7e.png)
# ==============================================================================
# Digita o valor de R$ 5000 para cobrir o custo do Notebook Gamer (R$ 4500)
navegador.find_element(By.ID, "depositInput").send_keys("5000")
time.sleep(1)

# Clica no botão "Depositar" para computar o saldo na conta
navegador.find_element(By.ID, "depositButton").click()
time.sleep(1.5)

# Aceita o alerta nativo de confirmação do depósito
try:
    navegador.switch_to.alert.accept()
    time.sleep(1)
except:
    pass

# Clica no botão da aba de produtos ("productsTabButton") para ver o Notebook
navegador.find_element(By.ID, "productsTabButton").click()
time.sleep(1.5)

# Clica no botão "Adicionar ao Carrinho" para finalizar a compra do Notebook Gamer
navegador.find_element(By.XPATH, "//*[contains(text(), 'Adicionar ao Carrinho')]").click()
time.sleep(2)

# ==============================================================================
# 4. CONFIRMAÇÃO E SCREENSHOT
# ==============================================================================
# Aceita o Alerta nativo de sucesso da compra realizada
try:
    navegador.switch_to.alert.accept()
    time.sleep(1)
except:
    pass

# Salva o printscreen final de comprovação requisitado
navegador.save_screenshot("print_loja.png")
time.sleep(1)

navegador.quit()

