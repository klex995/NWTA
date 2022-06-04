import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class AppSearch(unittest.TestCase):
    def setUp(self):
        #service = Service("D:\chromedriver\chromedriver_win32\chromedriver.exe")
        #service.start()

        #self.driver = webdriver.Remote(service.service_url)
        #self.driver.get("http://localhost:3000")

        self.driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        self.driver.get("http://localhost:3000")


    def test_title(self):
        #service = Service("D:\chromedriver\chromedriver_win32\chromedriver.exe")
        #service.start()
        #driver = webdriver.Remote(service.service_url)
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000")
        title = driver.title
        print(title)

        assert 'SupleKoksa' == title

        #time.sleep(3)
        driver.close()

    def test_logowanie(self):
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000/login")

        search_login = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/form/input[1]""")
        search_pw = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/form/input[2]""")

        search_login.send_keys('admin')
        search_pw.send_keys('123456')

        search_button = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/form/button""")
        search_button.click()

        #time.sleep(1)


        driver.close()

    def test_rejestracja(self):
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000/register")

        search_email = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/div/form/input[1]""")
        search_login = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/div/form/input[2]""")
        search_haslo = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/div/form/input[3]""")
        search_pothaslo = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/div/form/input[4]""")

        search_email.send_keys('kacper.piaskowski@wp.pl')
        search_login.send_keys('supikacpi')
        search_haslo.send_keys('haslo123')
        search_pothaslo.send_keys('haslo123')

        search_button = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[2]/div/form/button""")
        search_button.click()
        # time.sleep(3)
        driver.close()


    def test_dodaj_koszyk(self):
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000/product/6294e6720296fcda6322d652")

        search_add = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[3]/div[2]/div/button""")
        search_add.click()

        driver.get("http://localhost:3000/cart")

        search_qcart = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[1]/div/div[3]/a[3]/div/span/span""")

        assert (int(search_qcart.text) > 0)



        driver.close()

    def test_payment(self):
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000/cart")

        search_paybtn = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[3]/div[2]/div[2]/span/button""")
        search_paybtn.click()


        ramka = driver.find_element(By.CSS_SELECTOR, "body > iframe")
        driver.switch_to.frame(ramka)

        time.sleep(1)

        search_email = driver.find_element(By.ID, "email")
        search_email.send_keys('laay@op.pl')
        search_name = driver.find_element(by=By.XPATH, value="""//*[@id="shipping-name"]""")
        search_name.send_keys('kacper')
        search_address = driver.find_element(by=By.XPATH, value="""//*[@id="shipping-street"]""")
        search_address.send_keys('polna 10')
        search_zip = driver.find_element(by=By.XPATH, value="""//*[@id="shipping-zip"]""")
        search_zip.send_keys('41022')
        search_city = driver.find_element(by=By.XPATH, value="""//*[@id="shipping-city"]""")
        search_city.send_keys('Florence')

        search_payinf = driver.find_element(by=By.XPATH, value="""//*[@id="submitButton"]/span/span""")
        search_payinf.click()

        time.sleep(1)

        search_card_number = driver.find_element(by=By.XPATH, value="""//*[@id="card_number"]""")
        search_card_number.send_keys('4242424242424242')
        search_mmyy = driver.find_element(by=By.XPATH, value="""//*[@id="cc-exp"]""")
        search_mmyy.send_keys('122022')
        search_cvc = driver.find_element(by=By.XPATH, value="""//*[@id="cc-csc"]""")
        search_cvc.send_keys('123')

        search_payconf = driver.find_element(by=By.XPATH, value="""// *[ @ id = "submitButton"] / span / span""")
        search_payconf.click()



        driver.close()

    def test_element_exists(self):
        driver = webdriver.Chrome(executable_path=r"D:\chromedriver\chromedriver_win32\chromedriver.exe")
        driver.get("http://localhost:3000/")

        search_itbtn = driver.find_element(by=By.XPATH, value="""//*[@id="root"]/div/div[5]/div[1]/div[2]/div[2]/a""")
        search_itbtn.click()


        driver.close()




    def tearDown(self):
        self.driver.close()

if __name__ == "__auto_test1__":
    unittest.main()