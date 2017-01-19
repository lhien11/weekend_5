-- DROP TABLE employees; --


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name varchar(20) NOT NULL,
    last_name  varchar(20) NOT NULL,
    employee_id varchar(20) NOT NULL,
    title varchar(30) NOT NULL,
    salary float,
    active boolean not null
);

SELECT * FROM employees;

-- Generated random data from from mockaroo --
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Alice', 'Webb', 2001, 'Account Representative III', '95291.82', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Chris', 'Morrison', 2002, 'Web Developer II', '64202.44', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Henry', 'Reyes', 2003, 'Senior Financial Analyst', '77674.98', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Kelly', 'Snyder', 2004, 'Nurse', '73618.29', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Thomas', 'Alexander', 2005, 'Compensation Analyst', '76252.27', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Clarence', 'Burke', 2006, 'Programmer Analyst IV', '72817.08', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Randy', 'Flores', 2007, 'Human Resources Assistant I', '90444.72', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Cheryl', 'Allen', 2008, 'Account Executive', '76582.89', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Sharon', 'Diaz', 2009, 'Nurse Practicioner', '61251.62', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Richard', 'George', 2010, 'Nuclear Power Engineer', '115117.58', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Russell', 'Burke', 2011, 'Speech Pathologist', '96532.47', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Matthew', 'Berry', 2012, 'Director of Sales', '79461.15', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Shawn', 'Nelson', 2013, 'Budget/Accounting Analyst II', '87306.09', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('John', 'Hunt', 2014, 'Financial Advisor', '104219.83', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Norma', 'Mills', 2015, 'Staff Accountant I', '61863.95', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Annie', 'Murray', 2016, 'Administrative Officer', '101769.25', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Deborah', 'Thomas', 2017, 'Web Developer II', '113268.05', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Dorothy', 'Evans', 2018, 'Statistician III', '115831.00', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Phillip', 'Hart', 2019, 'Office Assistant I', '64667.23', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Judy', 'Griffin', 2020, 'Physical Therapy Assistant', '74295.63', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Barbara', 'Stevens', 2021, 'VP Quality Control', '57684.08', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Brandon', 'Hicks', 2022, 'Accountant III', '75977.69', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Brian', 'Griffin', 2023, 'Paralegal', '89239.88', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Richard', 'Cole', 2024, 'Software Engineer II', '59364.54', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Christopher', 'Wells', 2025, 'Structural Engineer', '118107.23', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Gary', 'Lopez', 2026, 'Project Manager', '104842.26', false);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Andrea', 'Perkins', 2027, 'Occupational Therapist', '62117.35', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Robert', 'Patterson', 2028, 'VP Product Management', '92215.54', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Paul', 'Harrison', 2029, 'Software Test Engineer II', '64867.52', true);
insert into employees (id, first_name, last_name, employee_id, title, salary, active) values ('Theresa', 'Knight', 2030, 'Quality Control Specialist', '69312.71', true);
