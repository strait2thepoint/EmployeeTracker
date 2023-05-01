INSERT INTO department (department_name)
VALUES
  ('Housekeeping'),
  ('Nurse Aide'),
  ('Nurse'),
  ('Management');


INSERT INTO role (title, salary, department_id)
VALUES
('Housekeeping', 28000, 1),
('Nurse Aide', 40000, 2),
('Nurse', 83000, 3),
('Management', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
('Jean', 'Strekenghost', 1, null),
('BethAnn', 'DeLion', 2, 1),
('Cassie', 'Dodge', 2, 2),
('Stephen', 'Napier', 2, 3),
('Jenipher', 'Sera', 3, 5),
('Susan', 'Kind', 3, 5),
('Mark', 'Dewalt', 3, null),
('Travis', 'Crypt', 3, null),
('Tracy', 'Dew', 3, 2),
('Andrew', 'Winger', 3, 7),
('Brian', 'Wilson', 3, NULL);