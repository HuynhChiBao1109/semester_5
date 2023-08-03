from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait  # to wait for page to load
# import select class to select dropdown options
from selenium.webdriver.support.ui import Select
from time import sleep  # using sleep function to wait for page to load
email = 'kietltse161268@fpt.edu.vn'
password = 'Kiet5438'


def login():
    browser = webdriver.Chrome()
    
    browser.get('https://fap.fpt.edu.vn/')
    browser.maximize_window()

    select = Select(
        browser.find_element(By.ID,
                             'ctl00_mainContent_ddlCampus'))
    select.select_by_visible_text('FU-Hồ Chí Minh')
    sleep(1)
    element = browser.find_element(
        By.XPATH,
        '/html/body/div/div[2]/div/form/table/tbody/tr[1]/td/div/div/div/div[2]/div/fieldset/div/center/div/div[2]/div/div/div/span/span[1]')
    element.click()
    # store window handle of parent browser window
    parent_window = browser.current_window_handle
    # select the new window/tab
    browser.switch_to.window(browser.window_handles[1])
    sleep(1)
    browser.find_element(
        By.XPATH,
        '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input').send_keys(email)
    browser.find_element(
        By.XPATH,
        '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[2]/div/div[1]/div/div/button/span').click()
    sleep(3)
    browser.find_element(By.XPATH,
                         '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input').send_keys(password)
    sleep(1)
    browser.find_element(By.XPATH,
                         '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[2]/div/div[1]/div/div/button/span').click()
    # switch back to parent browser window
    browser.switch_to.window(parent_window)
    sleep(10)
    browser.get('https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx')
    
    # wait 5 seconds for page to load
    sleep(10)


login()
