package com.zmst.Controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.zmst.Domain.SubTax;
import com.zmst.Domain.SubTravelTax;
import com.zmst.Service.TaxCalculateService;
import com.zmst.Service.TravelTaxCalculateService;
import com.zmst.Tools.HttpReturn;

import javax.annotation.*;
/**
 * 
 * @author Zhou
 *旅游税收计算控制类
 */
@Controller
@RequestMapping("/TravelTaxCaculate")
public class TravelTaxCaculateController {
	@Resource
	private TravelTaxCalculateService travelTaxService;
	/**
	 *小类旅游税收调取及计算 
	 * 
	 */
	@RequestMapping(value="/subTravelTaxGet",method=RequestMethod.POST)  
   
	public void allTaxManager(HttpServletRequest request,HttpServletResponse response){
		 HttpSession session = request.getSession();	
		 String city ="张家界";
		 String county=null; 
		 String place = null;
		 String year = "2017";
			//String year = (String) session.getAttribute("year");
			 
			//city=(String) session.getAttribute("city");
			 
			//county= (String)session.getAttribute("county");
			 
			if(county!=null){
				 place=county;
			}else{
				place=city;
			}
		
	    List<SubTravelTax> subTravelTax =	travelTaxService.getSubTravelTaxt(year,place);
	    
		 try {
				request.setCharacterEncoding("utf-8");
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  //这里不设置编码会有乱码
		      response.setContentType("text/html;charset=utf-8");
			  String json = JSON.toJSONString(subTravelTax);
			  HttpReturn.reponseBody(response, json);;
	}
}
