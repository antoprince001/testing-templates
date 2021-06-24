/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import junit.framework.TestCase;
import testdemo.TestDemo;

/**
 *
 * @author anton
 */
public class NewEmptyJUnitTest extends TestCase {
    
    public NewEmptyJUnitTest(String testName) {
        super(testName);
    }
    
    @Override
    protected void setUp() throws Exception {
        super.setUp();
    }
    
    @Override
    protected void tearDown() throws Exception {
        super.tearDown();
    }

    // TODO add test methods here. The name must begin with 'test'. For example:
    public void testAdd() {
    
        System.out.println("Test 1");
        String s1 ="5";
        String s2 = "3";
        
        int expResult = 8;
        
        TestDemo td = new TestDemo();
        int result = td.add(s1, s2);
        
        assertEquals(expResult, result);
        
        //fail("Test Case in Addition");
    }
}
