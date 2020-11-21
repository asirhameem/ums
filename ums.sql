-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2020 at 11:00 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ums`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `courseid` int(20) NOT NULL,
  `coursename` varchar(20) NOT NULL,
  `coursecost` int(20) NOT NULL,
  `coursestatus` varchar(20) NOT NULL,
  `capacity` int(20) NOT NULL,
  `section` varchar(20) NOT NULL,
  `starttime` time(5) NOT NULL,
  `endtime` time(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`courseid`, `coursename`, `coursecost`, `coursestatus`, `capacity`, `section`, `starttime`, `endtime`) VALUES
(1, 'java', 5000, 'open', 40, 'A', '05:00:00.00000', '06:00:00.00000');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `empid` int(20) NOT NULL,
  `userid` int(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `department` varchar(20) NOT NULL,
  `desig` varchar(20) NOT NULL,
  `salary` int(20) NOT NULL,
  `joindate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`empid`, `userid`, `fullname`, `department`, `desig`, `salary`, `joindate`) VALUES
(1, 4, 'albart', 'library', 'ass libry', 100, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `bookid` int(30) NOT NULL,
  `bookname` varchar(100) NOT NULL,
  `authorname` varchar(100) NOT NULL,
  `bookdes` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`bookid`, `bookname`, `authorname`, `bookdes`) VALUES
(1, 'eee fact', 'jhon', 'its aelectric book');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `msgid` int(20) NOT NULL,
  `senderid` int(20) NOT NULL,
  `receiverid` int(20) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`msgid`, `senderid`, `receiverid`, `message`) VALUES
(1, 1, 6, 'edd'),
(2, 1, 6, 'iok'),
(3, 1, 6, 'uuu'),
(4, 1, 6, 'iok'),
(5, 1, 8, 'pay soon'),
(6, 1, 6, 'LOOK'),
(7, 1, 6, 'upgrade'),
(8, 1, 6, 'pay soon');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `sid` int(20) NOT NULL,
  `userid` int(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `department` varchar(20) NOT NULL,
  `cgpa` float NOT NULL,
  `dob` date NOT NULL,
  `addmissiondate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`sid`, `userid`, `fullname`, `department`, `cgpa`, `dob`, `addmissiondate`) VALUES
(27, 48, 'shanjida hride', 'eee', 4, '2019-03-05', '2020-11-01');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacherid` int(20) NOT NULL,
  `userid` int(20) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `department` varchar(20) NOT NULL,
  `desig` varchar(20) NOT NULL,
  `salary` int(20) NOT NULL,
  `joindate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacherid`, `userid`, `fullname`, `department`, `desig`, `salary`, `joindate`) VALUES
(9, 49, 'lamia kabie', 's', 'lecturer', 20000, '2020-11-01');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(10) NOT NULL,
  `username` varchar(12) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `type` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `username`, `email`, `phone`, `password`, `gender`, `city`, `type`) VALUES
(4, 'acc', 'acc@gmail.com', '9234577', 'acc', 'female', 'dhaka', 3),
(48, 'hride', 'hride@gmail.com', '01777772222', '12345', 'female', 'dhaka', 1),
(49, 'lamia', 'lamia@gmail.com', '017777702817', '12345', 'female', 'dhaka', 2),
(61, 'admin', 'admin@gmail.com', '01777772222', 'admin', 'female', 'dhaka', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`courseid`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`empid`),
  ADD KEY `fk4` (`userid`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`bookid`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`msgid`),
  ADD KEY `vk` (`senderid`),
  ADD KEY `vk1` (`receiverid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `fk5` (`userid`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacherid`),
  ADD KEY `fk6` (`userid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `courseid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `empid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `bookid` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `msgid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `sid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacherid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk4` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk5` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `fk6` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
